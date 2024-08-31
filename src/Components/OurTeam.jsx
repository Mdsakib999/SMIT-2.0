import React from 'react';

const OurTeam = () => {
    return (
        <div>
            <div className="relative ">
          <div className="grid grid-cols-12 md:gap-x-16 ">
			{/* category */}
            <div className=" col-span-12 sm:col-span-6 md:col-span-4 my-12">
              <Link to="/sorishaOil"
                
                className=" bg-white dark:bg-slate-800 shadow-xl relative flex items-end justify-center min-h-[160px] rounded-t-[90px] rounded-b-[15px] border dark:border-slate-700 "
              > 
                <div className=" absolute -top-[75px] left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 shadow border dark:border-slate-700 rounded-full flex justify-center items-center h-40 w-40">
                  <img src="https://greenmartbd.net/storage/upload/product/phT3W2MDVDODfNv1lZ62K8qedUEAIHbtD5ouqvM5.png" alt="tel ar picture" className="w-20" />
                </div>
                <h4 className="text-2xl font-medium mb-5">MUSTARD OIL / সরিষার তেল</h4>
              </Link>
            </div>

			<div className=" col-span-12 sm:col-span-6 md:col-span-4 my-12">
              <Link to="/honey"
                href="#!"
                className="bg-white dark:bg-slate-800 shadow-xl relative flex items-end justify-center min-h-[160px] rounded-t-[90px] rounded-b-[15px] border dark:border-slate-700 "
              >
                <div className=" absolute -top-[75px] left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 shadow border dark:border-slate-700 rounded-full flex justify-center items-center h-40 w-40">
                  <img src="https://www.harniva.com/assets/backend/admin/plugins/source/hakkimizda/kalitelibal.png" alt="" className="w-20" />
                </div>
                <h4 className="text-2xl font-medium mb-5 ">HONEY / মধু</h4>
              </Link>
            </div>

			<div className=" col-span-12 sm:col-span-6 md:col-span-4 my-12">
              <Link to="/ghee"
                href="#!"
                className="bg-white dark:bg-slate-800 shadow-xl relative flex items-end justify-center min-h-[160px] rounded-t-[90px] rounded-b-[15px] border dark:border-slate-700 "
              >
                <div className=" absolute -top-[75px] left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 shadow border dark:border-slate-700 rounded-full flex justify-center items-center h-40 w-40">
                  <img src="https://media.e-valy.com/cms/products/images/f4b3265d-df5e-4835-add4-0cd2654235d3" alt="" className="w-20" />
                </div>
                <h4 className="text-2xl font-medium mb-5">GHEE / ঘি</h4>
              </Link>
            </div>

          </div>
        </div>
        </div>
    );
};

export default OurTeam;