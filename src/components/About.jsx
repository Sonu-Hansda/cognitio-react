import React from 'react';
import CognitioPoster from "../assets/imgs/images/COGNITIO'24 Poster.webp";
import EventList from "../assets/imgs/images/Event-List .webp";

function About() {
  return (
    <section className='bg-white py-24'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            About Cognitio
          </h1>
          <h2 className='text-2xl font-semibold text-indigo-600'>
            The Mechanical Extravaganza
          </h2>
        </div>

        <div className='grid md:grid-cols-2 gap-12 lg:gap-16'>
          <div className='space-y-8'>
            <p className='text-lg text-gray-600 leading-relaxed'>
              As we slowly return to normal, the Mechanical Engineering Department of NIT Jamshedpur 
              presents COGNITIO'24 with the theme of Startup India ~ UNICORN ODYSSEY! A fusion of technology, 
              innovation, and inspiration. Since its inception in 2017, the festival has grown exponentially, 
              providing a platform for budding engineers to showcase their talent.
            </p>
            <div className='rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <img 
                src={CognitioPoster} 
                alt="Cognitio Poster" 
                className='w-full h-auto object-cover'
              />
            </div>
          </div>

          <div className='space-y-8'>
            <div className='rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <img 
                src={EventList} 
                alt="Event List" 
                className='w-full h-auto object-cover'
              />
            </div>
            <p className='text-lg text-gray-600 leading-relaxed'>
              People grow when they are challenged! COGNITIO provides opportunities to prove your 
              mettle through a series of events testing imagination, creativity, and perseverance.
            </p>
            <p className='text-lg text-gray-600 leading-relaxed'>
              This three-day extravaganza (October 14th-16th, 2024) offers more than just competitions - 
              it's a celebration of engineering that challenges your intellect and brings together 
              hundreds of students to ignite innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;