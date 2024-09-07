import { FaDatabase, FaReact, FaNodeJs, FaLock } from "react-icons/fa";
import { SiExpress, SiRedux, SiMongodb, } from "react-icons/si";
import { FaChartLine, FaBullhorn, FaSearchDollar, FaHandshake } from "react-icons/fa";
import { SiGoogleanalytics, SiMailchimp, SiSocialblade, SiAdobexd } from "react-icons/si"
import logo from './../../../public/Animation - 1725398925591.json';
import Lottie from "lottie-react";
const ServiceSection = () => {
    const marketingFeatures = [
        {
            feature: "Data-Driven Marketing Strategies",
            icon: FaChartLine
        },
        {
            feature: "Effective SEO and SEM Techniques",
            icon: FaSearchDollar
        },
        {
            feature: "Comprehensive Social Media Marketing",
            icon: SiSocialblade
        },
        {
            feature: "Advanced Google Analytics Integration",
            icon: SiGoogleanalytics
        },
        {
            feature: "Creative Advertising Campaigns",
            icon: FaBullhorn
        },
        {
            feature: "Email Marketing with Mailchimp",
            icon: SiMailchimp
        },
        {
            feature: "Brand Development and Management",
            icon: FaHandshake
        },
        {
            feature: "UX/UI Design for Digital Campaigns",
            icon: SiAdobexd
        }
    ];
    const mernFeatures = [
        {
            feature: "Full-Stack Development Expertise",
            icon: FaReact
        },
        {
            feature: "Efficient RESTful APIs with Express.js",
            icon: SiExpress
        },
        {
            feature: "Robust Backend with Node.js",
            icon: FaNodeJs
        },
        {
            feature: "Responsive Frontend with React.js",
            icon: FaReact
        },
        {
            feature: "Scalable NoSQL Databases with MongoDB",
            icon: SiMongodb
        },
        {
            feature: "Real-Time Data Handling with WebSockets",
            icon: FaDatabase
        },
        {
            feature: "State Management with Redux",
            icon: SiRedux
        },
        {
            feature: "Secure Authentication with JWT and OAuth",
            icon: FaLock
        }
    ];

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 section-container gap-y-2 py-20">
                <div className="h-fit">
                    {/* here include image  */}
                    <div className="flex justify-center items-center">
                        <Lottie
                            animationData={logo}
                            className=" h-fit"
                        />
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Design & Development</h1>
                    <p className="mt-6 text-sm text-gray-500">Web development is the process of building and maintaining websites, involving coding, design, and ensuring functionality and user experience</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-3">
                        {mernFeatures.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center group shadow-md hover:bg-orange-400 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out space-x-3 p-3 rounded-xl"
                            >
                                <item.icon className="text-xl text-orange-400 group-hover:text-white transition-all duration-300 ease-in-out" />
                                <p className="text-gray-500 group-hover:text-white transition-all duration-300 ease-in-out">
                                    {item.feature}
                                </p>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  section-container md:py-20">

                <div>
                    <h1 className="text-4xl font-bold">Digital Marketing</h1>
                    <p className="mt-6 text-sm text-gray-500">
                        Digital marketing involves leveraging data and technology to promote brands, engage audiences, and drive business growth through various online channels.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-3">
                        {marketingFeatures.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center group shadow-md hover:bg-orange-400 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out space-x-3 p-3 rounded-xl"
                            >
                                <item.icon className="text-xl text-orange-400 group-hover:text-white transition-all duration-300 ease-in-out" />
                                <p className="text-gray-500 group-hover:text-white transition-all duration-300 ease-in-out">
                                    {item.feature}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="h-fit">
                    {/* Lottie animation for digital marketing */}
                    <div className="flex justify-center items-center">
                        <Lottie
                            animationData={logo}
                            className="h-fit"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;