import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/basic/header/csr'
import Footer from '@/components/basic/footer/ssr'
import { DarkModeProvider } from '@/hooks/context/darkMode'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weavers Mall | 위버스 온라인 쇼핑몰',
  description: 'Discover a seamless and delightful online shopping experience at Weavers Mall. Explore our diverse catalog of products with detailed information, images, and prices. Enjoy secure user authentication, manage your shopping cart, and stay updated on order history and shipments. Find your desired items quickly with our search functionality.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
          <DarkModeProvider>
            <Header />
            {children}
            <Footer />
          </DarkModeProvider>
      </body>
    </html>
  )
}