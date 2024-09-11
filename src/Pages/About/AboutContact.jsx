import React from 'react';
import { FaLightbulb } from 'react-icons/fa'; // Importing icons for the lightbulbs
import { BsQuestionCircle } from 'react-icons/bs'; // Importing icons for the question marks

const AboutContact = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto rounded-md shadow-orange-100 shadow-xl relative bg-orange-50 py-16 px-5 flex items-center justify-center overflow-hidden">
      {/* Dotted SVGs on both sides */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-full h-full bg-cover bg-left opacity-40" style={{ backgroundImage: 'url("https://i.ibb.co.com/cbpMXLv/dot-IMG-removebg-preview.png")' }}></div>
      <div className="absolute inset-y-0 right-0 w-20  opacity-60 h-full bg-cover bg-right" style={{ backgroundImage: 'url("https://i.ibb.co.com/cbpMXLv/dot-IMG-removebg-preview.png")' }}></div>

      {/* Background icons */}
      <FaLightbulb className="absolute top-5 left-2 md:top-5 md:left-[15%] text-yellow-300 opacity-70 text-4xl md:text-6xl" />
      <FaLightbulb className="absolute md:top-5 right-10 md:right-[20%] rotate-45 text-yellow-300 opacity-50 text-4xl md:text-6xl" />
      <BsQuestionCircle className="absolute bottom-16 left-20 md:bottom-5 md:left-[25%] text-green-300 opacity-70 text-4xl md:text-6xl" />
      <BsQuestionCircle className="absolute bottom-2 right-[30%] md:bottom-10  md:right-[10%] -rotate-45 text-green-300 opacity-50 text-4xl md:text-8xl" />

      {/* Text and button */}
      <div className="text-center">
        <h1 className="text-xl md:text-4xl font-bold text-gray-800">
          Have Any Idea? <span className="text-orange-600">Hire Us Today!</span>
        </h1>
        <button className="mt-10 bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-500 text-white font-bold py-3 px-6 rounded-ss-xl rounded-ee-xl focus:outline-none focus:shadow-outline">
            Contact Now
          </button>
      </div>
    </div>
  );
};

export default AboutContact;
