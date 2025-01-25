import Waves from "./components/Waves";
import logo from "./assets/imgs/images/Cognitio logo (1).webp";
import MouseScrollAnimation from "./components/MouseScrollAnimation";
import Navbar from "./components/Navbar";
import About from "./components/About";
import EventsSection from "./components/Events";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <main className='bg-black min-h-screen relative overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <Waves
          lineColor="#4F46E5"
          backgroundColor="rgba(0, 0, 0, 0.0)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>

      <div className="relative z-10">
        <div className="absolute -bottom-20 left-0 w-full h-32 bg-gradient-to-b from-black via-black to-transparent clip-path-curve" />
      </div>

      <section className='relative z-20'>
        <Navbar logo={logo} />
        <div className='flex flex-col items-center justify-center min-h-[80vh] text-center px-4'>
          <img
            className='h-48 md:h-64 mb-12 opacity-90 hover:opacity-100 transition-opacity'
            src={logo}
            alt="Cognitio Main Logo"
          />

          <div className='space-y-8'>
            <button className='bg-indigo-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30'>
              Register Now
            </button>

            <div className='mb-16'>
              <MouseScrollAnimation
                size={32}
                color="#4F46E5"
                animationDuration={2}
              />
            </div>
          </div>
        </div>
        <About/>
        <EventsSection/>
        <Gallery/>
        <Contact/>
      </section>
    </main>
  );
}

export default App;