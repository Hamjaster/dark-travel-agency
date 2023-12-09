import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import { Arimo } from 'next/font/google'
import { Roboto } from 'next/font/google'
import Head from 'next/head'

const normal = Roboto({ subsets: ['latin'], weight: '300' })
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zanzibar travels',
  description: 'zanzibar tourism guides',
  icons: {
    icon: '/favicon.jpg', // /public path
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body className={normal.className}>
        {children}
      </body>


    </html>
  )
}
