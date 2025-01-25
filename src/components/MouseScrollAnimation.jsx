import React from 'react';

const MouseScrollAnimation = ({
    size = 24,
    color = '#000',
    animationDuration = 1.5,
}) => {
    return (
        <div className="flex flex-col items-center justify-center mt-4">
            <div className="w-10 h-16 bg-white border-2 border-gray-800 rounded-2xl relative flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg
                        className="animate-bounce"
                        width={size}
                        height={size}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            animationDuration: `${animationDuration}s`,
                            color: color,
                        }}
                    >
                        <path
                            d="M12 17.414L3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default MouseScrollAnimation;