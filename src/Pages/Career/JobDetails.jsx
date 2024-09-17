import { useParams } from "react-router-dom";
import { jobData } from "../../utils/jobdata";
import { IoLocationOutline } from "react-icons/io5";
import { LuClock2 } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";

const JobDetails = () => {
    const { title } = useParams()
    console.log(title);
    const job = jobData.find(item => item.jobTitle === title)
    return (
        <div>
            <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Section: Job Details */}
                <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-4">{job.jobTitle}</h1>

                    {/* Job Meta Data */}
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
                        <p className="flex gap-3 items-center text-gray-600">
                            <IoLocationOutline className="text-lg" /> {job.location}
                        </p>
                        <p className="flex gap-3 items-center text-gray-600">
                            <LuClock2 className="text-lg" /> {job.officeTime}
                        </p>
                        <p className="flex gap-3 items-center text-gray-600">
                            <SlCalender className="text-lg" />
                            {new Date().toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                    </div>

                    {/* Job Description */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-2">Job Description</h2>
                        <p className="text-gray-700">{job.jobDescription}</p>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-2">Responsibilities</h2>
                        <ul className="list-disc ml-5 space-y-2 text-gray-700">
                            {job.responsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Qualifications */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-2">Qualifications</h2>
                        <ul className="list-disc ml-5 space-y-2 text-gray-700">
                            {job.qualifications.map((qualification, index) => (
                                <li key={index}>{qualification}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Section: Job Summary */}
                <div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Job Summary</h2>
                        <div className="space-y-4">
                            <p className="flex justify-between text-gray-600">
                                <span className="font-semibold">Job Title:</span>
                                <span>{job.jobTitle}</span>
                            </p>
                            <p className="flex justify-between text-gray-600">
                                <span className="font-semibold"> Salary:</span>
                                <span>{job.salary} k</span>
                            </p>
                            <p className="flex justify-between text-gray-600">
                                <span className="font-semibold">Location:</span>
                                <span>{job.location}</span>
                            </p>
                            <p className="flex justify-between text-gray-600">
                                <span className="font-semibold">Office Time:</span>
                                <span>{job.officeTime}</span>
                            </p>
                            <p className="flex justify-between text-gray-600">
                                <span className="font-semibold">Vacancy:</span>
                                <span>{job.vacancy}</span>
                            </p>
                            <p className="flex justify-between text-gray-600">
                                <span className="font-semibold">Job Type:</span>
                                <span>{job.jobType}</span>
                            </p>
                            <p className="flex justify-between text-gray-600">
                                <span className="font-semibold">Work Days:</span>
                                <span>{job.workDays}</span>
                            </p>
                            <p className="flex justify-between text-gray-600">
                                <span className="font-semibold">Posted on:</span>
                                <span>{new Date().toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</span>
                            </p>
                        </div>

                        {/* Apply Button */}
                        {/* <div className="mt-8">
                        <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-md hover:bg-orange-600 transition duration-300">
                            Apply Now
                        </button>
                    </div> */}
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 md:w-[50%] mx-auto h-auto p-8 flex flex-col text-xl font-semibold my-8 rounded-lg justify-center items-center shadow-lg">
                <p className="w-full text-center text-gray-800">
                    Send your CV to{" "}
                    <span className="text-orange-500 font-bold">
                        shariar@smitsolution.com.bd
                    </span>{" "}
                    with the job title in the email subject.
                </p>
            </div>

        </div>
    );
};

export default JobDetails;