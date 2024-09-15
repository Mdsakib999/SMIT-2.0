import img1 from './../../assets/our story/1968.jpg';
import img2 from './../../assets/our story/1968.jpg';
import img3 from './../../assets/our story/business-people-standing-row-with-thumbs-up.jpg';

const CareerBanner = () => {
    return (
        <div className="w-full text-center relative py-20 md:py-32 overflow-hidden">
            {/* Background Shaking Images */}
            <img
                src={img1}
                alt="Image 1"
                className="absolute top-4 left-[10%] w-16 h-16 md:w-20 md:h-20 object-cover rounded-md animate-shake"
            />
            <img
                src={img2}
                alt="Image 2"
                className="absolute top-[15%] right-[15%] w-16 h-16 md:w-20 md:h-20 object-cover rounded-md animate-shake2"
            />
            <img
                src={img3}
                alt="Image 3"
                className="absolute bottom-[15%] left-[8%] w-16 h-16 md:w-20 md:h-20 object-cover rounded-md animate-shake2"
            />
            <img
                src={img1}
                alt="Image 4"
                className="absolute bottom-[5%] right-[8%] w-16 h-16 md:w-20 md:h-20 object-cover rounded-md animate-shake"
            />
            <img
                src={img2}
                alt="Image 5"
                className="absolute top-[5%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-16 h-16 md:w-20 md:h-20 object-cover rounded-md animate-shake"
            />

            {/* Text Content */}
            <p className="text-2xl md:text-4xl">Join Our Crew,</p>
            <h1 className="text-2xl md:text-4xl font-bold mt-4 md:mt-6">
                <span className="text-orange-400">Excellence Starts </span>
                <span>with You!</span>
            </h1>
            <p className="text-sm md:text-base lg:w-[60%] mx-auto my-6 md:my-8">
                Are you ready to make your mark? If you want to be part of our growing team, then now is the time. So, find the perfect 6amTech job that suits your unique talent.
            </p>
            <button className="bg-orange-400 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-md hover:bg-opacity-90 transition duration-300">
                Join
            </button>
        </div>
    );
};

export default CareerBanner;
