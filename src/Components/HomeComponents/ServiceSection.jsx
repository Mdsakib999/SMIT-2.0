import { FaDatabase, FaReact, FaNodeJs, FaLock } from "react-icons/fa";
import { SiExpress, SiRedux, SiMongodb, } from "react-icons/si";
import logo from './../../../public/Animation - 1725398925591.json';
import Lottie from "lottie-react";
const ServiceSection = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 section-container py-20">
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
                <div className="grid grid-cols-2 mt-10 gap-3">
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
    );
};

export default ServiceSection;