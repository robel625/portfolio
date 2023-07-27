import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-primaryDark">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center text-white mb-8">Contact Us</h1>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-primaryLight transition-colors duration-300"
          >
            Send Message
          </button>
        </div>
        <div className="flex justify-center mt-10">
          <div className="flex items-center mr-6 text-white">
            <FaEnvelope className="text-primaryLight text-2xl" />
            <span className="ml-2">info@example.com</span>
          </div>
          <div className="flex items-center mr-6 text-white">
            <FaPhone className="text-primaryLight text-2xl" />
            <span className="ml-2">123-456-7890</span>
          </div>
          <div className="flex items-center text-white">
            <FaMapMarkerAlt className="text-primaryLight text-2xl" />
            <span className="ml-2">123 Street, City, Country</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
