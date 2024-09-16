import { Link } from "react-router-dom";
import { jobData } from "../../utils/jobdata";
import { IoLocationOutline } from "react-icons/io5";
import { LuClock2 } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";

const JobSection = () => {
    return (
        <div>
            <div className="text-center mt-16 ">
                <h1 className="text-2xl font-semibold"> SM IT SOLUTION Job Openings</h1>
                <p className="mt-4 font-semibold">Be A Part of Our Growing Team</p>
            </div >
            <div className="max-w-6xl mx-auto px-4">
                {
                    jobData.map((item, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8 flex flex-col md:flex-row justify-between items-start md:items-center transition hover:shadow-xl">
                            {/* Left section with job info */}
                            <div className="w-full md:w-[70%] mb-4 md:mb-0">
                                <div className="flex flex-wrap gap-4 items-center mb-2">
                                    <h1 className="text-xl md:text-2xl font-semibold text-gray-800">{item.jobTitle}</h1>
                                    <p className="text-xs md:text-sm rounded-md border border-red-400 text-red-400 px-2 py-1 font-semibold">{item.jobType}</p>
                                </div>

                                {/* Location and office time */}
                                <div className="mt-4 flex flex-wrap gap-4 justify-start md:justify-between text-xs md:text-sm text-gray-600">
                                    <p className="flex gap-2 items-center">
                                        <IoLocationOutline className="text-base md:text-lg" /> {item.location}
                                    </p>
                                    <p className="flex gap-2 items-center">
                                        <LuClock2 className="text-base md:text-lg" /> {item.officeTime}
                                    </p>
                                    <p className="flex gap-2 items-center text-gray-600">
                                        <SlCalender className="text-base md:text-lg" />
                                        {new Date().toLocaleDateString('en-US', {
                                            weekday: 'long',   // Display the day of the week (e.g., Monday)
                                            year: 'numeric',   // Display the year (e.g., 2024)
                                            month: 'long',     // Display the month (e.g., September)
                                            day: 'numeric'     // Display the day (e.g., 13)
                                        })}
                                    </p>
                                </div>
                            </div>

                            {/* Right section with Apply Now button */}
                            <div className="w-full md:w-auto">
                                <Link to={`/career/${item.jobTitle}`} className="flex flex-col items-center justify-center">
                                    <button className="relative inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 overflow-hidden font-medium text-orange-600 transition duration-300 ease-out border-2 border-orange-500 rounded-full shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
                                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full text-orange-500 transition-all duration-300 transform group-hover:translate-x-full ease">Apply Now</span>
                                        <span className="relative invisible">Apply Now</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default JobSection;