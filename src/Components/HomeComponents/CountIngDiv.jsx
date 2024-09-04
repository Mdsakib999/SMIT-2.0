import React from 'react';
import CountUp from 'react-countup';

const CountIngDiv = () => {
  return (
    <div className="  my-10 bg-neutral-50 bg-[url('https://i.ibb.co/NmnMFs6/WorldMap.png')] bg-cover bg-center ">
      <div className="w-[90%] h-96 py-5 mx-auto flex justify-evenly items-center text-center">
        <div>
          <p className="text-6xl text-orange-500 mb-2">
            <CountUp enableScrollSpy={true} end={50}></CountUp>+
          </p>
          <p className="lg:text-xl text-lg font-semibold">Happy Clients</p>
        </div>
        <div>
          <p className="text-6xl text-orange-500 mb-2">
            <CountUp enableScrollSpy={true} end={15}></CountUp>+
          </p>
          <p className="lg:text-xl text-lg font-semibold">Finished Project</p>
        </div>
        <div>
          <p className="text-6xl text-orange-500 mb-2">
            <CountUp enableScrollSpy={true} end={14}></CountUp>+
          </p>
          <p className="lg:text-xl text-lg font-semibold">Team Members</p>
        </div>
        <div>
          <p className="text-6xl text-orange-500 mb-2">
            <CountUp enableScrollSpy={true} end={5}></CountUp>+
          </p>
          <p className="lg:text-xl text-lg font-semibold">Years Of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default CountIngDiv;