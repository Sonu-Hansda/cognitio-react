import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-white space-y-8">
            <h2 className="text-4xl font-bold">Contact Us</h2>
            <div className="space-y-6">
              <div>
                <h6 className="text-lg font-semibold">Phone</h6>
                <p className="text-gray-300 hover:text-indigo-500 transition-colors duration-300">
                  Arshit:<a href="tel:+919060749085">9060749085</a>
                </p>
              </div>
              <div>
                <h6 className="text-lg font-semibold">Email</h6>
                <p className="text-gray-300 hover:text-indigo-500 transition-colors duration-300">
                  <a href="mailto:mes@nitjsr.ac.in">mes@nitjsr.ac.in</a>
                </p>
              </div>
              <div>
                <h6 className="text-lg font-semibold">Developers</h6>
                <p className="text-gray-300">
                  Shaket Shubham & Sonu Hansda
                </p>
              </div>
            </div>
          </div>

          <form
            action="https://formspree.io/f/maykjqyg"
            method="POST"
            className="space-y-6"
          >
            <h4 className="text-2xl font-bold text-white">Drop Us A Line</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
                required
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 sm:col-span-2"
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
            >
              Send
            </button>
          </form>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Cognitio. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Developed by <span className="text-indigo-500">Shaket Shubham</span> & <span className="text-indigo-500">Sonu Hansda</span>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;