import React from 'react';
import Event from './Event';
import eventData from '../events.json';

const EventsSection = () => {
  return (
    <section id="events" className="bg-indigo-100 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          The Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(eventData).map((ele) => (
            <Event key={ele} id={ele} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
