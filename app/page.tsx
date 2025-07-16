'use client';

import dynamic from 'next/dynamic';

// This is the correct, robust dynamic import for the real package
const Spline = dynamic(
  () => import('@splinetool/react-spline').then((mod) => mod.default),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main style={{ height: '100vh', width: '100vw' }}>
      <Spline
        // PASTE YOUR PUBLIC URL FROM SPLINE HERE
        scene="https://my.spline.design/untitled-pGjVRYB1iz0Ee7eYRaJfbITH/scene.splinecode"
      />
    </main>
  );
}