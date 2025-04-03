import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Suspense } from 'react';
import LoaderScreen from './components/LoaderScreen';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <title>Mun-e</title>
      </head>
      <body className={`${poppins.variable} antialiased bg-background`}>
        <Navbar className='px-4 py-3' />
        <Suspense fallback={<LoaderScreen />}>
          <div className='px-4 py-3'>{children}</div>
        </Suspense>
        <Footer className='w-screen' />
      </body>
    </html>
  );
}
