import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'RepairHub ERP', description: 'Mobile phone repair shop operations workspace', generator: 'v0.app' }
export const viewport: Viewport = { colorScheme: 'light dark', themeColor: [{ media: '(prefers-color-scheme: light)', color: '#f7f8fc' }, { media: '(prefers-color-scheme: dark)', color: '#0b1224' }] }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
