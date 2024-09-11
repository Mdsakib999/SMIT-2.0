import { FaAward, FaRegHandshake, FaBullhorn, FaGlobe, FaCheck } from 'react-icons/fa';


const Award = () => {
    const awardArray = [
        {
            id: '1',
            subtitle: 'Over 10 Awards',
            title: 'Award-Winning Company',
            icon: FaAward
        },
        {
            id: '2',
            subtitle: 'Diverse Event Sponsor',
            title: 'Sponsored 10+ Events',
            icon: FaBullhorn
        },
        {
            id: '3',
            subtitle: 'Multi-Brands United',
            title: '12+ Brand Partners',
            icon: FaRegHandshake
        },
        {
            id: '4',
            subtitle: 'Globally Trusted',
            title: '50K Live Customers',
            icon: FaGlobe
        },
    ];
    const achievement = [
        {
            id: '1',
            title: '50K+ Happy Clients',
            description: "Our dedication to client satisfaction has resulted in over 50,000 happy clients worldwide, trusting our services for their business success."
        },
        {
            id: '2',
            title: '100+ Projects Delivered',
            description: "With a proven track record, we have successfully delivered over 100 projects across various industries, ensuring top-notch quality and innovation."
        },
        {
            id: '3',
            title: '10+ Years in Business',
            description: "Established over a decade ago, we have consistently evolved and adapted to the ever-changing tech landscape, solidifying our position as an industry leader."
        }
    ];

    return (
        <div className="mt-8 section-container  p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="grid grid-cols-2 md:grid-cols-2  shadow-md bg-white">
                    {awardArray.map((item) => (
                        <div
                            key={item.id}
                            className={`flex flex-col justify-center items-center p-4 border ${item.id === '1' ? 'border-b-2 ' : ''} ${item.id === '2' ? 'border-b-2 border-r-2 ' : ''} ${item.id === '3' ? 'border-t-2 md:border-t-0' : ''} ${item.id === '4' ? 'border-t-2 md:border-t-0 border-r-0' : ''}`}
                        >
                            <item.icon className="text-7xl text-orange-400 mb-4" />
                            <h3 className="text-xl font-semibold text-center">{item.title}</h3>
                            <p className="text-sm text-center text-gray-500">{item.subtitle}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <small className='text-gray-500 font-bold ' >Achievements</small>
                    <h1 className='text-3xl font-bold'>Award & Recognition</h1>
                    <div className='mt-4'>
                        {
                            achievement.map(item => (
                                <div key={item.id} className="flex items-start justify-center gap-6 mb-6">
                                    {/* Icon Section */}
                                    <div className="flex-shrink-1">
                                        <span className="bg-orange-500 w-12 h-12 flex justify-center items-center rounded-full">
                                            <FaCheck className="text-white text-2xl" />
                                        </span>
                                    </div>

                                    {/* Text Content */}
                                    <div>
                                        <h1 className="text-lg font-bold text-gray-800">{item.title}</h1>
                                        <p className="text-gray-600 mt-1">{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Award;