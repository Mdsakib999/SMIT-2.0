import img1 from '../../assets/missionAndVision/1041954_96924-OKN4LJ-249.jpg';
import img2 from '../../assets/missionAndVision/400.jpg';
import { motion } from 'framer-motion';

const sectionVariants = id => ({
    hidden: { opacity: 0, x: id % 2 === 0 ? 50 : -100 },  // Even IDs slide in from the right, odd IDs from the left
    visible: { opacity: 1, x: 0, transition: { duration: .9 } }
});


const MissionAndVision = () => {
    const missionAndVision = [
        {
            id: '1',
            title: "Our Mission",
            description: "At SM IT Solutions, our goal is to offer businesses modern and dependable digital tools that are customized to fit their needs. We work to make technology easier to understand, helping our clients thrive in the fast-changing digital world through our unique services in web development, e-commerce, digital marketing, and custom apps.",
            image: img1
        },
        {
            id: '2',
            title: "Our Vision",
            description: "Our vision is to be a global leader in digital transformation, driving the success of businesses worldwide with cutting-edge technology and unparalleled service. We aim to foster lasting partnerships by continually delivering impactful, customer-centric solutions that fuel growth, efficiency, and innovation.",
            image: img2
        }
    ];


    return (
        <div className="mt-12 section-container space-y-16">
            {missionAndVision.map(item => (
                <motion.div
                    key={item.id}
                    className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 mb-10"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants(item.id)}
                    viewport={{ once: false }}
                >
                    {item.id % 2 !== 0 ? (
                        <>
                            {/* Text First, Image Second */}
                            <div>
                                <h1 className="text-4xl font-bold">
                                    {item.title.split(' ').slice(0, -1).join(' ')}{' '}
                                    <span className="text-orange-500">
                                        {item.title.split(' ').slice(-1)}
                                    </span>
                                </h1>
                                <p className="mt-6">{item.description}</p>
                            </div>
                            <img src={item.image} className="rounded-tr-[800px]" alt={item.title} />
                        </>
                    ) : (
                        <>
                            {/* Image First, Text Second */}
                            <img src={item.image} className=" rounded-md order-last md:order-first" alt={item.title} />
                            <div>
                                <h1 className="text-4xl font-bold">
                                    {item.title.split(' ').slice(0, -1).join(' ')}{' '}
                                    <span className="text-orange-500">
                                        {item.title.split(' ').slice(-1)}
                                    </span>
                                </h1>
                                <p className="mt-6">{item.description}</p>
                            </div>
                        </>
                    )}
                </motion.div>
            ))}
        </div>

    );
};

export default MissionAndVision;