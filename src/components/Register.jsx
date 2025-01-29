import React, { useState } from "react";
import { motion } from "framer-motion";

const Register = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);
  
    return (
      <>
        <button
          onClick={toggleModal}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none"
        >
          Open Registration Form
        </button>
  
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleModal}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-2xl w-11/12 max-w-2xl shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-center mb-6">Registration Form</h2>
              <form className="space-y-4">
                <div>
                  <label className="block font-medium mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-2 border rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
  
                <div>
                  <label className="block font-medium mb-1">Registration Number</label>
                  <input
                    type="text"
                    placeholder="Enter your registration number"
                    className="w-full p-2 border rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
  
                <div>
                  <label className="block font-medium mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 border rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
  
                <div>
                  <label className="block font-medium mb-1">Batch</label>
                  <input
                    type="text"
                    placeholder="Enter your batch"
                    className="w-full p-2 border rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
  
                <div>
                  <label className="block font-medium mb-1">College/School/Organisation</label>
                  <input
                    type="text"
                    placeholder="Enter your institution name"
                    className="w-full p-2 border rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
  
                <div>
                  <label className="block font-medium mb-1">WhatsApp Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your WhatsApp number"
                    className="w-full p-2 border rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
  
                <div>
                  <label className="block font-medium mb-1">Transaction ID</label>
                  <input
                    type="text"
                    placeholder="Enter your transaction ID"
                    className="w-full p-2 border rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
  
                <div>
                  <label className="block font-medium mb-1">Branch</label>
                  <select
                    className="w-full p-2 border rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="CSE">CSE</option>
                    <option value="EE">EE</option>
                    <option value="ECE">ECE</option>
                  </select>
                </div>
  
                <div>
                  <label className="block font-medium mb-1">Choose Events</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" /> Event 1
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" /> Event 2
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" /> Event 3
                    </label>
                  </div>
                </div>
  
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none"
                >
                  Register
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </>
    );
  };
export default Register;