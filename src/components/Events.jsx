import React from 'react';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      number: '01',
      title: 'Quriosity',
      description:
        'India is emerging as a world leader in the field of innovation, and new-age start-ups are the forerunners of this development. This year\'s Quriosity will focus on start-ups...',
      link: './events.html?q=quriosity',
    },
    {
      id: 2,
      number: '02',
      title: 'Assemblage',
      description:
        'Strength of mechanical models and engineering structures is an important area of study and experimentation. Concept and principles dealing with truss systems...',
      link: './events.html?q=assemblage',
    },
    {
      id: 3,
      number: '03',
      title: 'Radiation',
      description:
        'Mechanical engineering deals with the making of machines that make our lives easier. The current era is all about creating technology that is highly efficient in...',
      link: './events.html?q=radiation',
    },
    {
      id: 4,
      number: '04',
      title: 'Elevator Pitch',
      description:
        'COGNITIO’24 brings a unique opportunity to test your mettle in the form of ELEVATOR PITCH. In this event, participants must present their unique startup idea...',
      link: './events.html?q=pitch',
    },
    {
      id: 5,
      number: '05',
      title: 'Place Station',
      description:
        'Do you consider yourself an all-rounder? Do you have a unique way of accomplishing goals? Do you stand out in a crowd? Come enter this corporate labyrinth...',
      link: './events.html?q=placestation',
    },
    {
      id: 6,
      number: '06',
      title: 'Conundrum',
      description:
        'With the advent of Make in India, industries are transforming into a new generation. This advancement demands engineers to showcase their skills and prove...',
      link: './events.html?q=conundrum',
    },
    {
      id: 7,
      number: '07',
      title: 'Cansys',
      description:
        'Design skills lead to the augmentation of visualization and multi-dimension quality checks of models supported by detailed analysis reports. Designing and...',
      link: './events.html?q=cansys',
    },
    {
      id: 8,
      number: '08',
      title: 'Dictum Symposium',
      description:
        'The greatest quality of a leader is the wisdom of opinion and way of expression. COGNITIO ’24 brings you the opportunity to get into the war of words...',
      link: './events.html?q=dictumsymposium',
    },
    {
      id: 9,
      number: '09',
      title: 'Shoot at Sight',
      description:
        'Propulsion systems are highly powerful driving technologies enabling the physical essence of distant places. The event deals with water propulsion systems in rockets...',
      link: './events.html?q=shootatsight',
    },
    {
      id: 10,
      number: '10',
      title: 'Open Stage',
      description:
        'Cognitio’24 isn’t just limited to technical and managerial events. It also promotes the cultural aspect of a student’s life. Open Stage will ensure that...',
      link: './events.html?q=openstage',
    },
    {
      id: 11,
      number: '11',
      title: 'Robo War',
      description:
        'For COGNITIO 24, we propose an exhilarating Robo War event that spans across three engaging rounds, challenging students to unleash their creativity...',
      link: './events.html?q=roboWar',
    },
  ];

  return (
    <section id="events" className="bg-indigo-100 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          The Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <span className="text-sm font-bold text-indigo-600">
                  {event.number}
                </span>

                <h3 className="text-2xl font-semibold text-gray-900 mt-2">
                  {event.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {event.description}
                </p>

                <div className="mt-6 text-center">
                  <a
                    href={event.link}
                    className="inline-block px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;