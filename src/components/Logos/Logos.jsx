import React from "react";

const AboutMentor = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your Mentor</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          With 5+ years of experience in the financial markets, I help aspiring traders understand price action, smart money concepts (SMC), and risk management — turning confusion into clarity.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <img
            src="/mentor.jpg"
            alt="Mentor"
            className="w-52 h-52 rounded-full shadow-lg object-cover mx-auto"
          />
          <div className="text-left">
            <h3 className="text-2xl font-semibold mb-2">FX_Sadiq_AH</h3>
            <p className="text-gray-700 mb-4">
              I’ve mentored 200+ traders across Africa through a results-driven approach combining technical precision, mindset coaching, and live mentorship.
            </p>
            <p className="text-gray-600">
              Whether you're a beginner or struggling to stay consistent, I’ll guide you through a system that’s simple, structured, and tailored to your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMentor;
