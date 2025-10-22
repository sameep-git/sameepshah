import './globals.css';

import { Inter } from 'next/font/google';
import localFont from 'next/font/local'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const suse_mono = localFont({
  src : '../fonts/SUSEMono-VariableFont_wght.ttf',
  variable : '--font-suse-mono'
});

export const metadata = { title: "Sameep Shah" };

export default function RootLayout({ children }) {
  return (
    <html lang="en"
      className={`${suse_mono.variable} ${inter.variable}`}
    >
      <body className={`text-text bg-background`}>{children}</body>
    </html>
  );
}
