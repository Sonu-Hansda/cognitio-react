import React, { useEffect, useState } from 'react';
import eventData from '../events.json';
import Modal from './Modal';

const Event = ({ id }) => {
    const [event, setEvent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const foundEvent = eventData[id.toLowerCase().replace(/\s/g, '')] || eventData[id];
        setEvent(foundEvent);
    }, [id]);

    if (!event) {
        return <div>Loading...</div>;
    }

    const handleLearnMoreClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="event-card bg-white shadow-lg rounded-lg p-4 m-4 h-64 flex flex-col justify-between">
            <img className='rounded-xl' src={event.img} alt={event.name} />
            <button
                onClick={handleLearnMoreClick}
                className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition cursor-pointer"
            >
                Learn More
            </button>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
    <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-100">{event.name}</h2>
        <img
            src={event.img}
            alt={event.name}
            className="w-full h-auto rounded-lg mb-6 border border-blue-400/30"
        />
        <p className="text-blue-100 mb-6">{event.desc}</p>

        <h3 className="font-semibold text-xl mb-4 text-blue-100">Details:</h3>
        <ul className="list-disc list-inside mb-6 text-blue-100">
            {event.details1.map((detail, index) => (
                <li key={index} className="mb-2">
                    {detail}
                </li>
            ))}
        </ul>

        {event.details2.map((round, index) => (
            <div key={index} className="mb-6">
                <h4 className="font-semibold text-lg mb-2 text-blue-100">
                    {round.heading}
                </h4>
                <ul className="list-disc list-inside text-blue-100">
                    {round.points.map((point, idx) => (
                        <li key={idx} className="mb-2">
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        ))}

        <h3 className="font-semibold text-xl mb-4 text-blue-100">Event Heads:</h3>
        <ul className="list-disc list-inside mb-6 text-blue-100">
            {event.eh.map((head, index) => (
                <li key={index} className="mb-2">
                    {head}
                </li>
            ))}
        </ul>

        <h3 className="font-semibold text-xl mb-4 text-blue-100">Prize:</h3>
        <p className="text-blue-100">{event.prize}</p>
    </div>
</Modal>
        </div>
    );
};

export default Event;
