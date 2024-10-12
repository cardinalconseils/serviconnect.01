'use client'

import { GoogleReCaptchaProvider as ReCaptchaProvider } from 'react-google-recaptcha-v3'

const GoogleReCaptchaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}>
    {children}
  </ReCaptchaProvider>
);

export default GoogleReCaptchaProvider;
