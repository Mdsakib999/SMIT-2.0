import useDocumentTitle from "../../Hooks/useDocumentTitle";
import bgImage from '../../assets/pexels-pixabay-327533.jpg';
import OurStory from "../../Components/AboutUsComponents/OurStory";
import Award from "../../Components/AboutUsComponents/Award";
import MissionAndVision from "../../Components/AboutUsComponents/MissionAndVisson";

const About = () => {
    useDocumentTitle(`About | SM IT Solution`)
    return (
        <div className="-mt-12 py-32">
            <div className="relative w-full h-screen -mt-32 py-32">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-85"></div> {/* Optional overlay for better text visibility */}
                </div>

                {/* Centered Text */}
                <div className="relative flex justify-center items-center h-full">
                    <h1 className="text-white text-5xl md:text-6xl font-bold text-center">
                        About me
                    </h1>
                </div>
            </div>
            <OurStory />
            <Award />
            <MissionAndVision />
        </div>
    );
};

export default About;

// {
//     <section className="py-16 bg-gray-100">
//     <div className="container mx-auto px-6 md:px-12">
//         <div className="text-center mb-12">
//             <h2 className="text-4xl font-extrabold text-gray-800">
//                 Who We Are
//             </h2>
//             <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
//                 At SM IT Solution, we believe in the power of technology to transform businesses. Our team of experts is dedicated to delivering innovative solutions that drive success and growth for our clients.
//             </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Core Values */}
//             <div className="bg-white p-8 rounded-lg shadow-lg">
//                 <h3 className="text-2xl font-bold text-indigo-600">Innovation</h3>
//                 <p className="text-gray-600 mt-4">
//                     We stay ahead of the curve by embracing the latest technologies and trends to provide our clients with the most innovative solutions.
//                 </p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg">
//                 <h3 className="text-2xl font-bold text-indigo-600">Integrity</h3>
//                 <p className="text-gray-600 mt-4">
//                     We are committed to maintaining the highest ethical standards in everything we do, building trust with our clients.
//                 </p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg">
//                 <h3 className="text-2xl font-bold text-indigo-600">Excellence</h3>
//                 <p className="text-gray-600 mt-4">
//                     We strive for excellence in every project, delivering outstanding results that exceed expectations.
//                 </p>
//             </div>
//         </div>

//         <div className="text-center mt-12">
//             <Link
//                 to="/contact"
//                 className="inline-block px-8 py-3 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition-all duration-300"
//             >
//                 Get in Touch
//             </Link>
//         </div>
//     </div>
// </section>
// }