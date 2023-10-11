'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const params = useParams();
  const { day } = params;

  useEffect(() => {
    (async () => {
      const { sketch } = await import(`../sketches/${day}/sketch`);
      console.log(sketch);

      sketch();
    })();
  }, [day]);

  return (
    <div className='my-10'>
      <h2 className='mb-2 font-bold'>{day}</h2>
      <div className={`${day}`}></div>
    </div>
  );
}
