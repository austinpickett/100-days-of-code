'use client';

import { useEffect } from 'react';
import { day01 } from './sketches/day01';
import { day02 } from './sketches/day02';
import { day03 } from './sketches/day03';
import { day04 } from './sketches/day04';
import { day05 } from './sketches/day05';

export default function Home() {
  useEffect(() => {
    day01();
    day02();
    day03();
    day04();
    day05();
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
