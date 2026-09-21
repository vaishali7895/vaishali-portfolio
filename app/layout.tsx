import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vaishali Gupta | Web Developer',
  description: 'Portfolio of Vaishali Gupta, a Web Developer building responsive and user-focused web applications.',
  metadataBase: new URL('https://vaishali-gupta.vercel.app'),
  alternates: { canonical: '/' },
  openGraph: { title: 'Vaishali Gupta | Web Developer', description: 'Portfolio of Vaishali Gupta, a Web Developer building responsive and user-focused web applications.', type: 'website' },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = { colorScheme: 'dark light', themeColor: '#0B0F14', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
