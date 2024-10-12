import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { token } = req.body;

  const verifyUrl = `https://recaptchaenterprise.googleapis.com/v1/projects/serviconnect-b1df2/assessments?key=${process.env.GOOGLE_CLOUD_API_KEY}`;

  try {
    const response = await fetch(verifyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: {
          token,
          expectedAction: 'homeowner_signup',
          siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        },
      }),
    });

    const data = await response.json();

    if (data.tokenProperties.valid && data.riskAnalysis.score >= 0.5) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false, message: 'reCAPTCHA verification failed' });
    }
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}

