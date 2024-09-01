import { HiMiniCheckBadge } from "react-icons/hi2";
import videoLogo from '../../assets/icons8-video-50.png'
import Modal from "../Shared/Modal";
import { useState } from "react";
import bgImg from '../../assets/Half Round BG.png';

const Banner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className=" h-[calc(100vh-10px)] scale-x-[-1] mt-14 md:-mt-[75px] " style={{ background: `url("${bgImg}") no-repeat center center / cover` }} >
                <div className="grid grid-cols-1 md:grid-cols-2  h-full section-container scale-x-[-1]">
                    <div className=" flex items-center ">
                        <div className="text-center md:text-left">
                            <h1 className="text-xl md:text-3xl font-bold ">SM IT SOLUTION Your Trusted Partner in Digital Innovation!</h1>
                            <p className="text-sm mt-4">At SM IT SOLUTION, you can discover state-of-the-art technological solutions that will propel your company to new heights. Our goal is to help businesses succeed in the digital world by solving their challenges and providing them with innovative IT services.</p>
                            <div className="mt-8 flex  justify-center md:justify-normal space-x-6">
                                <button className="bg-[#FD9F48] px-4 py-2 rounded-2xl text-base font-semibold text-white">Start Now</button>
                                <button onClick={openModal} className="px-4 py-2 border hover:rounded-xl flex items-center gap-2 border-black">
                                    <img className="size-6" src={videoLogo} alt="" />
                                    Watch Now</button>
                            </div>
                            <div className="mt-6 flex justify-center md:justify-normal gap-3">
                                <span className="flex text-sm font-semibold items-center "> <HiMiniCheckBadge className="size-6  text-green-700" /> Customizable Workflow</span>
                                <span className="flex text-sm font-semibold items-center"> <HiMiniCheckBadge className="size-6  text-green-700" /> Time Tracking</span>
                            </div>
                        </div>

                    </div>
                    <div>
                        {/* here include image */}
                    </div>
                </div>

            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} >
                <iframe className="h-full w-full md:h-96 md:w-[800px]" src="https://www.youtube.com/embed/NSAOrGb9orM?si=nbE501uYgdNZtQ83" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen='true' ></iframe>
            </Modal>
        </>
    );
};

export default Banner;