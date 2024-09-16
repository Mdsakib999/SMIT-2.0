import { benefitsData } from "../../utils/benefitsData";

const CareerWithCountless = () => {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-4xl font-semibold">A Career With Countless Perks</h1>
                <p className="md:max-w-[50%] mx-auto mt-4">At Code Rex, we believe, the team is only as good as its members. So we make sure you are well taken care of. Every employee at Code Rex enjoys the following:</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 p-4 mt-8">
                {
                    benefitsData.map((item, index) => {
                        // Split title into words
                        const words = item.title.split(' ');
                        const lastWord = words.pop(); // Get the last word

                        // Alternate color logic using index % 2
                        const color = index % 2 === 0 ? 'text-blue-600' : 'text-green-600';

                        return (
                            <div key={index} className="flex items-center bg-gray-100 shadow-md p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 w-full sm:w-[30%] lg:w-[22%]">
                                {/* Icon */}
                                <div className={`${color} text-3xl mr-4 bg-white p-4 rounded-full`}>
                                    <item.icon />
                                </div>

                                {/* Text Content */}
                                <div className="text-left">
                                    <p className="font-bold text-xl text-gray-800">
                                        {words.join(' ')} <span className={`${color}`}>{lastWord}</span>
                                    </p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>


        </div>
    );
};

export default CareerWithCountless;