'use client';

// THIS IS THE MISSING LINE! You must import 'dynamic' to use it.
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline').then((mod) => mod.default), {
  ssr: false,
});

export default function Home() {
  return (
    <main style={{ height: '100vh', width: '100vw' }}>
      <Spline
        scene="/scene.splinecode"
      />
    </main>
  );
}