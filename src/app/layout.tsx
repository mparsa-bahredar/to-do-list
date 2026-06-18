import { NextIntlClientProvider } from 'next-intl'
import Header from '../components/layout/Header/Header'
import './global.css'



export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (
    <html lang='en'>
      <NextIntlClientProvider>
        <body className='bg-[#F5F5F5] dark:bg-[#011428]'>
          <Header />
          <main>{children}</main>
        </body>
      </NextIntlClientProvider>
    </html>
  )
}

