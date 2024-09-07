import { Link, useParams } from "react-router-dom";
import { services } from "../../utils/service";
import { useEffect } from "react";

const ServiceDetails = () => {
    const { title } = useParams(); // Assuming you are using React Router for navigation
    const plainTitle = title.split('-').join(' ')
    const service = services.find((service) => service.title.toLowerCase() == plainTitle.toLowerCase());
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [])
    if (!service) {
        return <p>Service not found.</p>;
    }
    const handelClick = () => {
        window.scrollTo({ top: 0 });
    }

    return (
        <div className="bg-gray-100 min-h-screen p-4 md:p-8 -mt-12 py-32">
            <div className="max-w-6xl  mx-auto bg-white shadow-lg rounded-lg p-8">
                {/* Service Overview */}
                <div className="flex items-center mb-8">
                    <service.logo className="text-orange-400 text-5xl mr-4" />
                    <h1 className="text-xl md:text-4xl font-bold text-gray-800">{service.title}</h1>
                </div>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <p className="text-base text-gray-700 leading-relaxed mb-8">{service.details}</p>

                {/* Key Features Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {service.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>



                {/* Related Services Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.relatedServices.map((relatedService, index) => (
                            <div key={index} className="flex items-center p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 transition-all duration-300">
                                <relatedService.logo className="text-orange-400 text-3xl mr-4" />
                                <Link onClick={handelClick} to={relatedService.link} className="text-gray-800 text-lg font-semibold hover:underline">{relatedService.title}</Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="text-center mt-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
                    <p className="text-gray-600 mb-6">Contact us today to learn more about how our services can help your business grow and succeed.</p>
                    <Link to={'/contact'} className="bg-orange-400 text-white px-8 py-3 rounded-lg hover:bg-orange-500 transition duration-300">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;