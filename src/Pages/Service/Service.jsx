import { Link } from 'react-router-dom';
import bgImage from '../../assets/pexels-pixabay-327533.jpg';
import { services } from '../../utils/service';
import { useEffect } from 'react';



const Service = () => {

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
                    <div key={index} className="relative bg-white border-2 border-orange-400 shadow-lg rounded-lg p-6 flex flex-col items-start">
                        <div className="bg-orange-400 text-white p-3 rounded-full mb-4">
                            <service.logo className="text-2xl" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h2>
                        <p className="text-sm text-orange-400 font-semibold mb-4">{service.category}</p>
                        <p className="text-gray-600 mb-6">{service.description}</p>
                        <Link to={`/service/${service.title.split(' ').join('-').toLocaleLowerCase()}`} className="mt-auto bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition duration-300">
                            See Details
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Service;