import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '100-days-of-code',
  description: 'presented by akp',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
