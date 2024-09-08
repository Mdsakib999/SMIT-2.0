import { Link } from 'react-router-dom';
import bgImage from '../../assets/pexels-pixabay-327533.jpg';
import { services } from '../../utils/service';
import { useEffect } from 'react';
import useDocumentTitle from '../../Hooks/useDocumentTitle';



const Service = () => {
    useDocumentTitle(`Service | SM IT Solution `)
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [])
    return (
        <div className=''>
            <div className="relative w-full h-screen -mt-32 py-32">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <div className="absolute inset-0 bg-orange-400 opacity-80"></div> {/* Optional overlay for better text visibility */}
                </div>

                {/* Centered Text */}
                <div className="relative flex justify-center items-center h-full">
                    <h1 className="text-white text-5xl md:text-6xl font-bold text-center">
                        Our Services
                    </h1>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative bg-white border border-gray-200 shadow-lg rounded-2xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300 ease-in-out min-h-[400px] flex flex-col"
                    >
                        <div className="relative p-8 flex-grow flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-gray-100 rounded-full mb-6 flex justify-center items-center transition-transform duration-300 group-hover:scale-110">
                                <service.logo className="text-4xl text-orange-400 transition-colors duration-300 group-hover:text-pink-500" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-pink-500">
                                {service.title}
                            </h2>
                            <p className="text-sm text-gray-500 font-medium mb-4 uppercase">
                                {service.category}
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                        <Link
                            to={`/service/${service.title.split(' ').join('-').toLocaleLowerCase()}`}
                            className="bg-orange-400 text-white text-center py-3 font-semibold rounded-lg mx-6 mb-6 transition-all duration-300 ease-in-out hover:bg-pink-500 transform hover:scale-105"
                        >
                            See Details
                        </Link>
                        {/* <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out rounded-2xl"></div> */}
                    </div>
                ))}
            </div>









        </div>
    );
};

export default Service;