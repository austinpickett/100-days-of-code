'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    (async () => {
      const { day01 } = await import('./sketches/day01');
      const { day02 } = await import('./sketches/day02');
      const { day03 } = await import('./sketches/day03');
      const { day04 } = await import('./sketches/day04');
      const { day05 } = await import('./sketches/day05');

      day01();
      day02();
      day03();
      day04();
      day05();
    })();
  }, []);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm'>
        <h1 className='font-bold text-lg mb-2'>./100-days-of-code</h1>

        <div className='my-10'>
          <h2 className='mb-2 font-bold'>day-01</h2>
          <div className='day-01'></div>
        </div>

        <div className='my-10'>
          <h2 className='mb-2 font-bold'>day-02</h2>
          <div className='day-02'></div>
        </div>

        <div className='my-10'>
          <h2 className='mb-2 font-bold'>day-03</h2>
          <div className='day-03'></div>
        </div>

        <div className='my-10'>
          <h2 className='mb-2 font-bold'>day-04</h2>
          <div className='day-04'></div>
        </div>

        <div className='my-10'>
          <h2 className='mb-2 font-bold'>day-05</h2>
          <div className='day-05'></div>
        </div>
      </div>
    </main>
  );
}
