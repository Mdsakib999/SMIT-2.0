import img1 from '../../assets/our story/business-people-standing-row-with-thumbs-up.jpg';
import img2 from '../../assets/our story/2149008873.jpg';
import img3 from '../../assets/our story/1968.jpg';
import { motion } from 'framer-motion';
const sectionVariants2 = {
    hidden: { opacity: 0, scale: 0.8 },  // Scale up effect
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

const OurStory = () => {
    const smItSolutionOurStory = [
        "SM IT Solution began with a mission to revolutionize businesses through innovative technology. Starting with a small team, we've grown into a leading provider of IT solutions, driven by a commitment to excellence and customer satisfaction.",
        "Our journey at SM IT Solution is one of passion and growth. What started as a vision to empower businesses with technology has evolved into a trusted partnership, delivering tailored IT services that meet the diverse needs of our clients.",
        "From our humble beginnings, SM IT Solution has become a key player in the IT industry. We are dedicated to offering cutting-edge solutions, ensuring our clients stay ahead in the ever-changing digital landscape while maintaining our core values of integrity and innovation.",
        "At SM IT Solution, our story is about relentless pursuit of innovation. We started small but with big dreams, and today we stand proud, helping businesses achieve their goals through technology, with a focus on quality and long-lasting relationships."
    ];

    return (
        <motion.div
            initial="hidden"
            animate={{ pathLength: 1 }}
            whileInView="visible"
            variants={sectionVariants2}
            viewport={{ once: false }}
            className="mt-8 section-container bg-gray-50 dark:bg-gray-800 py-12 px-6 md:px-12 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h1 className="text-4xl font-bold text-orange-500 mb-6">Our Story</h1>
                    <div className="space-y-6">
                        {smItSolutionOurStory.map((item, index) => (
                            <p
                                key={index}
                                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition duration-500 ease-in-out transform hover:scale-105">
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="hidden md:flex relative justify-center items-center space-x-4">
                    <img src={img2} alt="" className="w-44 h-32 -mb-64 -mr-24 hover:z-20 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out" />
                    {/* Optionally add an image or a decorative element here */}
                    <img src={img1} alt="" className="w-80 z-10  object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out" />
                    <img src={img3} alt="" className="w-44 h-32 absolute -mb-64 right-0 hover:z-20 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out" />
                </div>

            </div>
        </motion.div>
    );
};

export default OurStory;
