import '../globals.css'
import { Inter } from '@next/font/google';
import Header from '../Header';
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <Header />
        {children}
        </body>
    </html>
  )
}
