import './globals.css'
import { Inter } from 'next/font/google'
import GoogleReCaptchaProvider from '@/components/GoogleReCaptchaProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ServiConnect',
  description: 'Connect with service providers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleReCaptchaProvider>
          {children}
        </GoogleReCaptchaProvider>
      </body>
    </html>
  )
}
