import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Demo = () => {
  return (
    <div>

      <div className=" bg-zinc-100 px-4 py-4">



        <ul className="flex items-center justify-center font-semibold">

          {/*1st*/}
          <li className="relative group px-3 py-2">
            <button
              className="hover:opacity-50 cursor-default"
              aria-haspopup="true"
            >
              Products
            </button>
            <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>

                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Sister Concern
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Tazan Agro Ltd.
                            <p className="text-gray-500 font-normal">
                              Quality you cna trust.
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Farhana Enterprise
                            <p className="text-gray-500 font-normal">
                              Pre-build payments page
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Tazan Organic Meat Ltd.
                            <p className="text-gray-500 font-normal">
                              Quality you cna trust.
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Tazan Agro Enterprise.
                            <p className="text-gray-500 font-normal">
                              Quality you cna trust.
                            </p>
                          </a>
                        </li>

                      </ul>
                    </div>
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Extensions
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Tazan Feeds Ltd.
                            <p className="text-gray-500 font-normal">
                              Quality you cna trust.
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Tazan Eco Resort
                            <p className="text-gray-500 font-normal">
                              Get your time back
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Tazan Properties Ltd.
                            <p className="text-gray-500 font-normal">
                              Generate content for socials
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Tazan Fishers Ltd.
                            <p className="text-gray-500 font-normal">
                              Generate content for Market.
                            </p>
                          </a>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/*2st*/}
          <li className="relative group px-3 py-2">
            <button
              className="hover:opacity-50 cursor-default"
              aria-haspopup="true"
            >
              Solutions
            </button>
            <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                <div className="relative z-10">
                  <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                    Use cases
                  </p>
                  <ul className="mt-3 text-[15px]">
                    <li>
                      <a
                        href="#"
                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Creators
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Streamers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Influence
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Programming
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Design
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          {/*3rd*/}
          <li className="relative group px-3 py-2">
            <button className="hover:opacity-50 cursor-pointer">
              Resources
            </button>
            <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
              <div className=" relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10  h-10 bg-white transform rotate-45 absolute -top-1 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                <div className="relative z-10">
                  <ul className="text-[15px]">
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Get Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Guides
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        News &amp; Events
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

        </ul>



      </div>
    </div>
  );
};

export default Demo;



// Team design card
{/* <div className=" col-span-12 sm:col-span-6 md:col-span-3 my-12">
  <Link to="/"
    href="#!"
    className="bg-white dark:bg-slate-800 shadow-xl hover:shadow-orange-200 hover:shadow-lg relative flex items-end justify-center min-h-[185px] rounded-t-[90px] rounded-b-[15px] border dark:border-slate-700 border-orange-00"
  >
    <div>
      <div className=" absolute -top-[75px] left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 shadow border-2  dark:border-slate-700 rounded-full flex justify-center items-center h-36 w-36 border2">
        <img src="https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg " alt="" className="w-full rounded-full" />
      </div>
      <p className="text-xl font-medium text-center">MD Sakib</p>
      <p className="text-lg font-normal mb-1 text-center">Software Engineer</p>
      <hr className='w-full ' />
      <div className='my-2 text-xl hover:text-blue-600 flex justify-evenly'>
        <FaLinkedin />
        <FaTwitter />
      </div>

    </div>
  </Link>
</div> */}


// title
/* eslint-disable react/prop-types */
// import { PiArrowElbowRightDown } from "react-icons/pi";

// const SectionTitle = ({ title, description }) => {
//     const words = description?.split(' ');
//     const lastWord = words?.pop();
//     return (
//         <div className="flex justify-center items-center flex-col py-8">
//             <div className="flex gap-1  md:gap-4">
//                 <p className="text-sm md:text-lg font-bold uppercase tracking-widest ">{title}</p>
//                 <PiArrowElbowRightDown className="text-2xl md:text-5xl font-thin" />
//             </div>
//             <h1 className="text-2xl md:text-4xl font-bold text-center">
//                 {words.join(' ')}{' '}
//                 <span style={{ color: '#FF5733' }}>{lastWord}</span>


//             </h1>
//         </div>
//     );
// };

// export default SectionTitle;



<div className="mb-24 md:mb-44 b">
        <div className="section-container ">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center ">
            <div className="md:ml-16">
              <img src={img} className="h-[250px] lg:h-[420px] ml-4" alt="" />
              <div className="h-[200px] lg:h-[300px] w-[205px] lg:w-[350px] bg-red-500 -mt-[200px] lg:-mt-[300px]  rounded-xl"></div>
              <p className="h-[100px] lg:h-[150px] px-3 lg:px-0 lg:w-[150px] bg-orange-400 text-white flex flex-col justify-center items-center rounded-xl  -mt-[150px] ml-[175px] lg:-mt-[230px] lg:ml-[300px]">
                <span className=" text-xl md:text-4xl font-bold">2k</span>
                <span className="text-sm md:text-base">Happy Customer</span>
              </p>
            </div>
            <div className="max-w-[80%] mt-16 md:mt-28 relative">
              <span className="absolute -left-28 top-56 text-xl">😍</span>
              <h1 className="text-2xl font-bold">
                Augment your brand, and heighten your business
              </h1>
              <p className="text-sm text-slate-400 font-semibold mt-4">
                identify your authentic brand & shop elaewnts through an
                in-depth exploration, receivet unique strategies to clarify your
                vision, strengthen differentiation, and prime your company for
                growth Get litertod
              </p>
              <button
                type="submit"
                className="group mt-16  border border-orange-400 hover:border-none relative h-12 w-44 overflow-hidden rounded-ss-xl rounded-ee-xl font-bold bg-slate-50 text-lg shadow-md hover:shadow-lg"
              >
                <div className="absolute inset-0 w-3 bg-gradient-to-r from-orange-500 to-yellow-300 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  Get Start
                </span>
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>