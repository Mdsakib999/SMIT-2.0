import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const OurTeam = () => {
  const [membersData, setMembersData] = useState([]);

  useEffect(() => {
    fetch("TeamMemberData.json")
      .then((res) => res.json())
      .then((data) => setMembersData(data));
  }, []);
  console.log(membersData);

  return (
    <div className="bg-gradient-to-b from-[#fff] via-[#f3cf9427] to-[#fff]   my-12">
      <div className="  mx-auto  section-container">
        <p className="md:text-5xl text-3xl font-semibold md:mb-5 mb-6 text-center">
          Our Expert Team
        </p>
        <p className="md:w-[50%] w-[90%] mx-auto mb-20 text-center text-slate-500 ">
          Service is professional offerings provided by businesses to meet
          specific needs or solve problems for their customers. Services can range
          from your budget.
        </p>

        <Swiper
          slidesPerView={2}
          spaceBetween={50}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay, Navigation]}
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
                <div className="bg-white dark:bg-slate-800 shadow-xl hover:shadow-orange-200 hover:shadow-lg relative flex items-end justify-center min-h-[185px] rounded-t-[30px] rounded-b-[5px] border dark:border-slate-700">
                  <Link
                    to="/"
                    className="absolute inset-0 z-0"
                  >
                    {/* Invisible layer to make the entire card clickable for internal navigation */}
                  </Link>
                  <div className="relative z-10">
                    <div className="absolute -top-[100px] z-10 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 border-2 dark:border-slate-700 rounded-full flex justify-center items-center h-32 w-32">
                      <img
                        src={members.Image}
                        alt={members.name}
                        className="w-full rounded-full"
                      />
                    </div>
                    <p className="text-xl font-medium text-center mt-10">
                      {members.name}
                    </p>
                    <p className="text-lg font-normal mb-1 text-center">
                      {members.designation}
                    </p>
                    <hr className="w-full border-b-2" />
                    <div className="my-3 text-xl flex justify-evenly">
                      <a
                        href={members.linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        className="hover:text-blue-600 transition-colors duration-300"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        href={members.twiterLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter Profile"
                        className="hover:text-blue-600 transition-colors duration-300"
                      >
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
  );
};

export default OurTeam;
