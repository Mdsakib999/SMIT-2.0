/* eslint-disable react/prop-types */
import { PiArrowElbowRightDown } from "react-icons/pi";

const SectionTitle = ({ title, description }) => {
    const words = description?.split(' ');
    const lastWord = words?.pop();
    return (
        <div className="flex justify-center items-center flex-col py-8">
            <div className="flex gap-1  md:gap-4">
                <p className="text-sm md:text-5xl font-bold uppercase tracking-widest ">{title}</p>
                <PiArrowElbowRightDown className="text-2xl md:text-5xl font-thin " />
            </div>
            <p className="text-2xl md:text-2xl font-semibold text-center tracking-widest mt-2">
                {words.join(' ')}{' '}
                <span style={{ color: '#FF5733' }}>{lastWord}</span>

            </p>
        </div>
    );
};

export default SectionTitle;