import { NextApiRequest, NextApiResponse } from 'next';
import { sendSMS } from '../../lib/twilio';
import { db } from '../../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { userId, serviceRequestId } = req.body;

  try {
    // Fetch user data from Firestore
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userData = userDoc.data();
    const userPhone = userData.phone;

    // Send SMS notification
    const message = `Your service request (ID: ${serviceRequestId}) has been accepted by a provider. They will contact you shortly.`;
    await sendSMS(userPhone, message);

    res.status(200).json({ message: 'Notification sent successfully' });
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).json({ message: 'Error sending notification' });
  }
}