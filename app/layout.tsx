import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from './components/Navbar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Alfan Aisy - Full Stack Developer',
  description: 'My portfolio website built with Next.JS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="px-12 lg:px-32 xl:px-40 overflow-hidden">
          <Navbar />
          {children}
          <footer className="py-4 lg:px-36">
            <p className="text-slate-500 text-sm text-center">
              @ Alfan Aisy 2024
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
