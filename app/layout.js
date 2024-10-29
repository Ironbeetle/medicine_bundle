import { Suspense } from 'react';
import { Itim } from 'next/font/google';
import './globals.css'
import Loading from './loading';
const itim = Itim({ subsets: ['latin'], weight: '400', preload: true })
export const metadata = {
  title: 'KTC_App',
  description:'KTC tester'
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={itim.className}>
        <Suspense fallback={<Loading/>}>
          {children}  
        </Suspense>
      </body>
    </html>
  )
}
