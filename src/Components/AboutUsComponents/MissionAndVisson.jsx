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
            description: "At SM IT Solution, our mission is to empower businesses by providing innovative, reliable, and tailored IT solutions that cater to the unique needs of our clients. We believe in the transformative power of technology and are committed to delivering high-quality services that drive efficiency, enhance productivity, and foster growth. Our team of dedicated professionals works tirelessly to understand the challenges and opportunities facing our clients in the ever-evolving digital landscape. We aim to provide solutions that not only meet but exceed expectations, enabling businesses to achieve their goals and maintain a competitive edge in their respective industries. By leveraging the latest advancements in technology, we strive to create long-lasting value for our clients, ensuring their success today and in the future. Our mission is rooted in a deep commitment to excellence, integrity, and customer satisfaction, and we continuously seek to innovate and improve our offerings to better serve our clients' needs.",
            image: img1
        },
        {
            id: '2',
            title: "Our Vision",
            description: "Our vision at SM IT Solution is to be recognized as a global leader in the IT industry, renowned for our unwavering commitment to excellence, innovation, and customer satisfaction. We envision a future where businesses of all sizes can access cutting-edge technology solutions that empower them to reach new heights of success. As we continue to grow and expand our capabilities, we aim to build lasting partnerships with our clients, based on trust, transparency, and mutual respect. Our goal is to be the go-to partner for businesses seeking to navigate the complexities of the digital age, offering solutions that are not only effective but also sustainable. We aspire to lead by example, setting new standards for quality and service in the IT sector, while staying true to our core values of integrity, collaboration, and continuous improvement. By fostering a culture of innovation and learning within our organization, we are committed to driving positive change and making a meaningful impact in the lives of our clients and the communities we serve.",
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