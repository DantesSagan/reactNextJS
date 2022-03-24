import Image from 'next/image';
import React from 'react';
import imgOne from '../public/1.jpg';
export default function PetsPage() {
  // This three constas take from Next.js documentation
  //  to improve blur effect with some colors while img downloading
  const keyStr =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  const triplet = (e1, e2, e3) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  const rgbDataURL = (r, g, b) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
  return (
    <div style={{ marginTop: '200px' }}>
      <Image
        src={imgOne}
        placeholder='blur'
        alt='pets'
        width='640'
        height='420'
        blurDataURL={rgbDataURL(237, 181, 6)}
      />
      {/* {['1', '2', '3'].map((path) => {
        return (
          <div key={path.id}>
            <Image src={`/${path}.jpg`} alt='pets'  width='640' height='420' />
          </div>
        );
      })} */}
    </div>
  );
}
