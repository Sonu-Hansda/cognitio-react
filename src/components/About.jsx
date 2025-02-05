import React from 'react';
import CognitioPoster from "/main-theme.png";
import EventList from "/events.png";

function About() {

  return (
    <section id="about" className="w-full bg-white py-16 rounded-t-2xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Cognitio
          </h1>
          <h2 className="text-2xl font-semibold text-indigo-600">
            The Mechanical Extravaganza
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              COGNITIO, the annual fest of the Mechanical Engineering Department at NIT Jamshedpur, celebrates innovation and technology. This year’s theme, <strong>PROTOVERSE</strong>, pushes engineering beyond limits. With competitions, workshops, and expert talks, it’s a fusion of creativity and technology, shaping the future of mechanical engineering.
            </p>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={CognitioPoster}
                alt="Cognitio Poster"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={EventList}
                alt="Event List"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Strive for progress, not perfection. COGNITIO provides young minds a platform to check their progress via various competitions and events.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This three-day extravaganza from <strong>8th to 10th February</strong> unites brilliant minds, fostering creativity, competition, and collaboration, making it a thrilling journey of learning and excitement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;