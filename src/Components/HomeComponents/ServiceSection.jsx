import { FaDatabase, FaReact, FaNodeJs, FaLock } from "react-icons/fa";
import { SiExpress, SiRedux, SiMongodb, } from "react-icons/si";
import { FaChartLine, FaBullhorn, FaSearchDollar, FaHandshake } from "react-icons/fa";
import { SiGoogleanalytics, SiMailchimp, SiSocialblade, SiAdobexd } from "react-icons/si"
import img from "../../assets/DevelopmentImg.png";
import img2 from "../../assets/Digital.png";
import img4 from "../../assets/RoundPNG.png";


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
        <div className="  bg-neutral-50">
            <div className="grid items-center grid-cols-1 md:grid-cols-2 section-container py-20 gap-x-5 ">
                <div className="h-fit">
                    {/* here include image  */}
                    <div className="flex justify-center items-center relative ">
                        <img className="z-10" src={img} alt="Development" />
                        <img className="absolute spin-slow " src={img4} alt="spin" />
                    </div>
                </div>
                <div>
                    <div className="relative  mb-1">
                        <h1 className="text-2xl  font-bold mt-7">Our Ser<span className="text-orange-400 " >vic</span>e</h1>
                        <span className="inline-block bg-orange-400 size-8 rounded-full bg-opacity-60 absolute top-[-10px] left-[-23px] animate-pulse "></span>

                    </div>
                    <h1 className="text-4xl font-bold">Design & Development</h1>
                    <p className="mt-6 text-sm text-gray-500">Web development is the process of building and maintaining websites, involving coding, design, and ensuring functionality and user experience</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
                        {mernFeatures.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center bg-white group shadow-md hover:bg-orange-400 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out space-x-3 p-3 rounded-xl "
                            >
                                <item.icon className="text-xl text-orange-400 group-hover:text-white transition-all duration-300 ease-in-out" />
                                <p className="text-black group-hover:text-white transition-all duration-300 ease-in-out">
                                    {item.feature}
                                </p>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center section-container py-20  gap-x-5">

                <div>
                    <div className="relative  mb-3 ">
                        <h1 className="text-2xl  font-bold mt-7">Our Ser<span className="text-orange-400 " >vic</span>e</h1>
                        <span className="inline-block bg-orange-400 size-8 rounded-full bg-opacity-60 absolute top-[-10px] left-[-23px] animate-pulse "></span>

                    </div>
                    <h1 className="text-4xl font-bold">Digital Marketing</h1>
                    <p className="mt-6 text-sm text-black">
                        Digital marketing involves leveraging data and technology to promote brands, engage audiences, and drive business growth through various online channels.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
                        {marketingFeatures.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center group bg-white shadow-md hover:bg-orange-400 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out space-x-3 p-3 rounded-xl"
                            >
                                <item.icon className="text-xl text-orange-400 group-hover:text-white transition-all duration-300 ease-in-out" />
                                <p className="text-black group-hover:text-white transition-all duration-300 ease-in-out">
                                    {item.feature}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="h-fit">
                    {/* Lottie animation for digital marketing */}
                    <div className="flex justify-center items-center">
                        <img className="z-10" src={img2} alt="Digital Marketing" />
                        <img className="absolute spin-slow w-[33%]" src={img4} alt="spin" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;