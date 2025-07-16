'use client';

import dynamic from 'next/dynamic';

// Import our LOCAL wrapper component, not the package directly.
const Spline = dynamic(() => import('@/components/SplineWrapper'), {
  ssr: false,
});

export default function Home() {
  return (
    <main style={{ height: '100vh', width: '100vw' }}>
      <Spline
        // Use your Public URL from Spline here
        scene="https://prod.spline.design/i9f-OAU34uEWd9BF/scene.splinecode"
      />
    </main>
  );
}