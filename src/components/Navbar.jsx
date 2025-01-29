import { useState } from 'react';

const Navbar = ({ logo }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = [
        { name: 'about', url: '#about' },
        { name: 'events', url: '#events' },
        { name: 'register', url: '#register' },
    ];

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 bg-transparent`}>
            <div className='container mx-auto flex items-center justify-between px-6 py-4 md:px-12 lg:px-24'>
                <img
                    className='h-12 md:h-16 transition-transform hover:scale-105'
                    src={logo}
                    alt="Cognitio Logo"
                />

                <ul className='hidden md:flex gap-6 md:gap-12 text-gray-300'>
                    {menuItems.map((item) => (
                        <li key={item.name} className="group relative">
                            <a
                                href={item.url}
                                className="text-sm md:text-base font-medium hover:text-indigo-400 transition-colors"
                            >
                                {item.name}
                            </a>
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300" />
                        </li>
                    ))}
                </ul>

                <button
                    className="md:hidden text-gray-300 hover:text-indigo-400 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm py-4 px-6">
                        <ul className="flex flex-col gap-4">
                            {menuItems.map((item) => (
                                <li key={item.name} className="group">
                                    <a
                                        className="w-full text-left text-gray-300 text-lg font-medium hover:text-indigo-400 transition-colors py-3 border-b border-gray-800"
                                        onClick={() => setIsOpen(false)}
                                        href={item.url}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;