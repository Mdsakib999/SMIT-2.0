import React from 'react';

const LoadingComponent = () => {
    return (
        <div>
            <div className='bg-black h-[100vh] flex flex-col justify-center items-center '>
            <img
            src="https://i.ibb.co/Wzty2sw/SMIt-Solution-Logo.jpg"
            className="lg:w-[250px] w-[100px] rounded-full animate-pulse animate-infinite"
            alt="SM IT Logo"
          />
          
            <p className="self-center text-center font-mono whitespace-nowrap text-xl mt-4 lg:text-5xl font-semibold dark:text-white text-transparent bg-clip-text bg-gradient-to-r from-orange-500 from-10%  to-yellow-300 to-90% animate-pulse animate-infinite">
            SM IT SOLUTION
          </p>
            </div>
        </div>
    );
};

export default LoadingComponent;

