'use client';

import dynamic from 'next/dynamic';

// This is the complete and correct dynamic import, combining all previous fixes.
const Spline = dynamic(
  () => import('@splinetool/react-spline').then((mod) => mod.default),
  {
    ssr: false, // This ensures it only runs on the client
  }
);

export default function Home() {
  return (
    <main style={{ height: '100vh', width: '100vw' }}>
      <Spline
        scene="/scene.splinecode"
      />
    </main>
  );
}