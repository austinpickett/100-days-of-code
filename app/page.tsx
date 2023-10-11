'use client';

import Image from 'next/image';

const latest: number = 6;

export default function Home() {
  return (
    <div className='grid sm:grid-cols-3'>
      {Array.from({ length: latest }, (_, i) => i).map((v) => {
        const day = `day-${String(v + 1).padStart(2, '0')}`;

        return (
          <a href={`${day}`} key={v} className='mr-4'>
            <div className='my-10'>
              <h2 className='mb-2 font-bold'>{day}</h2>
              <Image
                alt={day}
                className={day}
                src={`/${day}.png`}
                width={640}
                height={640}
              />
            </div>
          </a>
        );
      })}
    </div>
  );
}
