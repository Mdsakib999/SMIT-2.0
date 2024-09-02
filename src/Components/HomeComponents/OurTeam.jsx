import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import { Pagination, Autoplay } from "swiper/modules";

const OurTeam = () => {
  const [membersData, setMembersData] = useState([]);

  useEffect(() => {
    fetch("TeamMemberData.json")
      .then((res) => res.json())
      .then((data) => setMembersData(data));
  }, []);
  console.log(membersData);

  return (
    <div className=" w-[90%] mx-auto ">
      <div className="relative text-center mb-16">
        {/* Blob Background */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-full max-w-md -z-10 animate-shake">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              fill="#FF6F61"
              d="M44.4,-58.2C58.1,-49.1,68.4,-34.7,73.2,-18.8C78.1,-2.9,77.6,14.3,70.8,28.7C63.9,43.2,50.6,54.8,36.6,61.1C22.7,67.4,7.9,68.3,-7.3,68.2C-22.6,68,-45.3,66.9,-57.8,55.3C-70.2,43.7,-72.4,21.9,-73.8,-0.2C-75.2,-22.3,-75.8,-44.6,-64.7,-55.2C-53.6,-65.9,-30.8,-64.9,-11.8,-61.2C7.1,-57.6,14.1,-51.3,24.4,-50.2C34.6,-49.2,48.1,-53.3,44.4,-58.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Title */}
        <p className="md:text-5xl text-3xl font-bold mb-6 text-gray-800 relative">
          Our Expert Team
        </p>

        {/* Description */}
        <p className="md:w-[60%] w-[85%] mx-auto text-lg md:text-xl text-gray-700 leading-relaxed">
          We provide professional services tailored to your unique needs, ensuring quality and affordability. Our team of experts is dedicated to helping you achieve success.
        </p>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,

        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {membersData?.map((members, index) => (
          <SwiperSlide key={index}>
            <div className="my-20 hover:-translate-y-2 duration-500 ">
              <Link
                to="/"
                className="bg-white dark:bg-slate-800 shadow-xl shadow-orange-100 hover:shadow-orange-200 hover:shadow-lg relative flex items-end justify-center min-h-[185px] rounded-t-[30px] rounded-b-[5px] border dark:border-slate-700 "
              >
                <div>
                  <div className="absolute -top-[75px] z-10 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 border-2 dark:border-slate-700 rounded-full flex justify-center items-center h-32 w-32  ">
                    <img
                      src="https://media.licdn.com/dms/image/v2/D5603AQFUkPFXrhh8yQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681406507415?e=1730332800&v=beta&t=TCy989yvAswrs31tZKccDV4ctFQiMyjrO6pWwdHwHF8"
                      alt=""
                      className="w-full rounded-full"
                    />
                  </div>
                  <p className="text-xl font-medium text-center">
                    {members.name}
                  </p>
                  <p className="text-lg font-normal mb-1 text-center">{members.designation}</p>
                  <hr className="w-full border-b-2" />
                  <div className="my-3 text-xl flex justify-evenly">
                    <FaLinkedin className="hover:text-blue-600" />
                    <FaTwitter className="hover:text-blue-600" />
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTeam;
