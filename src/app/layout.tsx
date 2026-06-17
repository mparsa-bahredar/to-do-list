import Header from '@/components/Header/Header'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-[#F5F5F5] dark:bg-gray-800'>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}