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