import { NextApiRequest, NextApiResponse } from 'next';
import { generateResponse } from '../../lib/openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { message } = req.body;

  try {
    const aiResponse = await generateResponse(message);
    res.status(200).json({ response: aiResponse });
  } catch (error) {
    console.error('Error in chat API:', error);
    res.status(500).json({ message: 'Error generating response' });
  }
}