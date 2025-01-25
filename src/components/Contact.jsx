import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-white space-y-6">
            <h2 className="text-4xl font-bold">Contact Us</h2>
            <div>
              <h6 className="text-lg font-semibold">Phone</h6>
              <p className="text-gray-300">6203348491</p>
            </div>
            <div>
              <h6 className="text-lg font-semibold">Email</h6>
              <p className="text-gray-300">mes@nitjsr.ac.in</p>
            </div>
          </div>

          <form
            action="https://formspree.io/f/maykjqyg"
            method="post"
            className="space-y-6"
          >
            <h4 className="text-2xl font-bold text-white">Drop Us A Line</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="email"
                name="Email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:col-span-2"
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Send
            </button>
          </form>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Cognitio. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;