'use client';

import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../../lib/firebase';
import { useRouter } from 'next/navigation';

interface ServiceRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  providerType: string;
  expertise: string;
  region: string;
  mrc: string;
  city: string;
  description: string;
  status: string;
  createdAt: string;
  userId: string;
}

export default function ProviderServiceRequests() {
  const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchServiceRequests(user.uid);
      } else {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const fetchServiceRequests = async (userId: string) => {
    try {
      const providerDoc = await getDocs(query(collection(db, 'providers'), where('userId', '==', userId)));
      if (providerDoc.empty) {
        setError('Provider profile not found');
        setLoading(false);
        return;
      }

      const providerData = providerDoc.docs[0].data();
      const q = query(
        collection(db, 'serviceRequests'),
        where('providerType', '==', providerData.serviceType),
        where('status', '==', 'pending')
      );

      const querySnapshot = await getDocs(q);
      const requests: ServiceRequest[] = [];
      querySnapshot.forEach((doc) => {
        requests.push({ id: doc.id, ...doc.data() } as ServiceRequest);
      });

      setServiceRequests(requests);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching service requests:', error);
      setError('Failed to fetch service requests');
      setLoading(false);
    }
  };

  const handleAcceptRequest = async (requestId: string, userId: string) => {
    try {
      const requestRef = doc(db, 'serviceRequests', requestId);
      await updateDoc(requestRef, {
        status: 'accepted',
        providerId: auth.currentUser?.uid,
        acceptedAt: new Date().toISOString()
      });

      // Notify user via SMS
      await fetch('/api/notify-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, serviceRequestId: requestId }),
      });

      setServiceRequests(prevRequests =>
        prevRequests.filter(request => request.id !== requestId)
      );
    } catch (error) {
      console.error('Error accepting service request:', error);
      setError('Failed to accept service request');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Available Service Requests</h1>
      {serviceRequests.length === 0 ? (
        <p>No service requests available at the moment.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {serviceRequests.map((request) => (
            <div key={request.id} className="border rounded-lg p-4 shadow-md">
              <h2 className="text-xl font-semibold mb-2">{request.providerType}</h2>
              <p><strong>Location:</strong> {request.city}, {request.mrc}, {request.region}</p>
              <p><strong>Description:</strong> {request.description}</p>
              <p><strong>Created At:</strong> {new Date(request.createdAt).toLocaleString()}</p>
              <button
                onClick={() => handleAcceptRequest(request.id, request.userId)}
                className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
              >
                Accept Request
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}