import React, { useState } from 'react';
import logo from "/logo.png";
import MouseScrollAnimation from "./components/MouseScrollAnimation";
import Navbar from "./components/Navbar";
import About from "./components/About";
import EventsSection from "./components/Events";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Modal from "./components/Modal";
import { Helmet } from 'react-helmet';
import Hero from './components/Hero';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Cognitio'25 | Mechanical Engineering Society Branch Fest 2025</title>
        <meta
          name="description"
          content="Explore the Mechanical Engineering Society (MES) Branch Fest at NIT Jamshedpur. Discover past events, student projects, and register for upcoming tech & cultural competitions. Join fellow students in workshops, robotics challenges, and more!"
        />
        <meta property="og:title" content="Join MES NIT Jamshedpur's Branch Fest 2025!" />
        <meta
          property="og:description"
          content="Celebrate innovation at MES NIT Jamshedpur's Branch Fest! Participate in technical workshops, robotics competitions, and cultural events. Register now for student-led activities."
        />
        <meta property="og:image" content="https://cognitio25.in/logo.webp" />
      </Helmet>

      <main className='bg-black min-h-screen relative overflow-hidden'>
        <Hero />
        <section className='relative z-20'>
          <Navbar logo={logo} onRegisterClick={handleRegisterClick} />
          <div className='flex flex-col items-center justify-center min-h-screen text-center px-0 md:px-4'>
            <img
              className='h-48 md:h-64 mb-12 opacity-90 hover:opacity-100 transition-opacity'
              src={logo}
              alt="Cognitio Main Logo"
            />

            <div className='space-y-8'>
              <button className='bg-indigo-600 text-white px-8 py-3.5 rounded-2xl text-lg font-semibold hover:-translate-y-2 transition-transform shadow-lg cursor-pointer' onClick={handleRegisterClick}>
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
            <About />
            <EventsSection />
            <Gallery />
          </div>
          <Contact />
        </section>

        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <Register onClose={handleCloseModal} />
        </Modal>
      </main>

    </>
  );
}

export default App;
