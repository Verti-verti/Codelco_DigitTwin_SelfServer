'use client'; // This is still very important

import dynamic from 'next/dynamic';

// Dynamically import the Spline component with SSR turned off
const Spline = dynamic(() => import('@splinetool/react-spline'), {
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