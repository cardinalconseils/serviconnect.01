'use client';

import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { auth, db } from '../../lib/firebase';
import { useRouter } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';

interface UserData {
  name: string;
  email: string;
  phone: string;
  type: 'user' | 'provider';
  serviceType?: string;
  experience?: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const providerDoc = await getDoc(doc(db, "providers", user.uid));
        if (userDoc.exists()) {
          setUserData({ ...userDoc.data() as UserData, type: 'user' });
        } else if (providerDoc.exists()) {
          setUserData({ ...providerDoc.data() as UserData, type: 'provider' });
        }
      } else {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (!user || !userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
      <p>Email: {user.email}</p>
      {userData.type === 'provider' ? (
        <div>
          <h2 className="text-xl font-semibold mt-4 mb-2">Provider Information</h2>
          <p>Name: {userData.name}</p>
          <p>Service Type: {userData.serviceType}</p>
          <p>Experience: {userData.experience} years</p>
          <Link href="/provider/service-requests" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            View Service Requests
          </Link>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mt-4 mb-2">User Information</h2>
          <p>Name: {userData.name}</p>
          <p>Phone: {userData.phone}</p>
          <Link href="/request-service" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Request a Service
          </Link>
        </div>
      )}
      <button
        onClick={() => auth.signOut()}
        className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
      >
        Sign Out
      </button>
    </div>
  );
}