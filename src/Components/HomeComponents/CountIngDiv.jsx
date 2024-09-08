import React from 'react';
import CountUp from 'react-countup';

const CountItem = ({ end, label }) => (
  <div className="flex flex-col items-center justify-center">
    <p className="text-4xl font-bold text-orange-500 mb-2">
      <CountUp enableScrollSpy={true} end={end} duration={2.5} />+
    </p>
    <p className="text-lg font-medium text-gray-500">{label}</p>
  </div>
);

const CountIngDiv = () => {
  const counts = [
    { end: 50, label: 'Happy Clients' },
    { end: 15, label: 'Finished Projects' },
    { end: 14, label: 'Team Members' },
    { end: 5, label: 'Years Of Experience' },
  ];

  return (
    <section className="my-16 py-10 bg-white text-center relative ">

      {/* <div className="background-gradient-count hidden md:block w-96 h-96 absolute top-[-120px] right-[0px] rounded-full "></div>
      <div className="background-gradient-count w-56 h-56 md:w-80 md:h-80 absolute top-[50%] right-[-25%]  md:top-[20%] md:left-[0%] rounded-full "></div> */}

      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          We Always Try To Understand Users Expectation
        </h2>
        <div className="flex justify-center items-center mb-6">
          <span className="w-12 h-1 bg-orange-500 inline-block"></span>
        </div>
        <p className="text-gray-500 mb-12 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {/* Count Items Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {counts.map((count, index) => (
            <CountItem key={index} end={count.end} label={count.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountIngDiv;
