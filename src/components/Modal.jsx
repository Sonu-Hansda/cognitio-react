import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
    // Close modal on pressing the Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            window.addEventListener("keydown", handleEscape);
        }

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-blue-900/50 backdrop-blur-lg overflow-y-auto p-4"
            onClick={onClose}
        >
            <div
                className="bg-blue-500/20 backdrop-blur-lg rounded-lg p-6 shadow-lg transform transition-all duration-300 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-blue-400/30 relative"
                onClick={(e) => e.stopPropagation()} 
            >
                <button
                    onClick={onClose}
                    className="fixed top-6 right-6 text-blue-100 hover:text-blue-300 text-4xl focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full bg-blue-900/50 p-2 hover:bg-blue-900/70 transition-all cursor-pointer"
                    aria-label="Close modal"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;