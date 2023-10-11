import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '100-days-coding',
  description: 'presented by akp',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <main className='flex min-h-screen flex-col items-center justify-between lg:p-24 md:p-16 p-8 '>
          <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm'>
            <a href='/'>
              <h1 className='font-bold text-lg mb-2'>./100-days-coding</h1>
            </a>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
