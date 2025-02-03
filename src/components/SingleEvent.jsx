import React from 'react';

const SingleEvent = ({ id }) => {
    return (
        <div className="event-card bg-white shadow-lg rounded-lg p-4 m-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-gray-600">{date}</p>
            <p className="mt-2">{description}</p>
        </div>
    );
};

export default SingleEvent;
