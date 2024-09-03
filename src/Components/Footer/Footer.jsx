import React from "react";
import { FiMail } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="overflow-hidden relative z-10 bg-black text-white pb-10 pt-20 lg:pt-[80px] ">

      {/* Gradient circle */}
      <div className="background-gradient-footer w-56 h-56 md:w-80 md:h-80 absolute top-[50%] right-[-25%]  md:top-[50%] md:left-[-8%] rounded-full "></div>

      <div className="container  lg:w-[90%] mx-auto ">
        <div className="mx-4 flex justify-between flex-wrap border-b border-zinc-600 ">
          {/* logo div */}
          <div className=" w-full px-4 sm:w-2/3 lg:w-3/12 ">
            <div className="mb-10 w-full  flex flex-col items-center">
              <a href="/#" className="mb-6 inline-block max-w-[110px] ">
                <img
                  src="https://i.ibb.co/tP79HPK/SMIt-Solution-Logo-removebg-preview.png"
                  alt="logo"
                  className="max-w-full dark:hidden"
                />
                {/* <img
      src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
      alt="logo"
      className="max-w-full hidden dark:block"
    /> */}
              </a>
              <p className="mb-7 text-base text-body-color dark:text-dark-6">
                Our core principle is providing exceptional service to fuel our
                clients' business growth.
              </p>
            </div>
          </div>

          <div className="w-full md:w-5/12 px-4 flex md:justify-evenly justify-between mb-8 ">
            <div>
              <p className="mb-6 text-lg font-semibold text-dark dark:text-white ">
                Company
              </p>
              <p className="mt-3">About SM IT </p>
              <p className="mt-3">Services</p>
              <p className="mt-3">Our Team</p>
              <p className="mt-3">Career</p>
            </div>

            <div>
              <p className="mb-6  text-lg font-semibold text-dark dark:text-white ">
                Quick Links
              </p>
              <p className="mt-3">Premium Support</p>
              <p className="mt-3">Terms & Condition</p>
              <p className="mt-3">Contact Us</p>
              <p className="mt-3">Latest News</p>
            </div>
          </div>

          {/* Icon div */}
          <div className=" w-full px-4 sm:w-1/2 lg:w-3/12 ">
            <div className="mb-4 w-full ">
              <p className="mb-6 text-lg font-semibold text-dark dark:text-white ">
                Address
              </p>
              <div className=" ">
                <p className="flex items-center gap-x-2">
                  <FiMail className="text-xl"></FiMail>{" "}
                  shariar@smitsolution.com.bd
                </p>
                <p className="flex items-center gap-x-2 mt-2">
                  <BiPhoneCall className="text-xl"></BiPhoneCall> +88
                  01842113575
                </p>
                <p className="flex  gap-x-2 mt-2">
                  <SlLocationPin className="text-3xl"></SlLocationPin> JBS
                  Holdings Ltd. Block-A, Bashundhara Dhaka, Bangladesh.
                </p>
                <p className="flex  gap-x-2 mt-2">
                  <SlLocationPin className="text-2xl"></SlLocationPin> Nasirabad
                  Properties Road 1, Chittagong, Bangladesh.
                </p>
              </div>

              <div className="flex mt-5 gap-x-4">
                <Link to="https://www.facebook.com/smitsolution.uae" target="_blank">
                  <FaFacebookF className="border rounded-full p-1 text-3xl hover:border-blue-500"></FaFacebookF>
                </Link>
                <Link to="https://www.linkedin.com/company/smitsolution/" target="_blank">
                  <FaLinkedin className="border rounded-full p-1 text-3xl hover:border-blue-500"></FaLinkedin>
                </Link>
                <FaTwitter className="border rounded-full p-1 text-3xl hover:border-blue-500"></FaTwitter>
                <FaInstagram className="border rounded-full p-1 text-3xl hover:border-orange-500"></FaInstagram>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute right-10 top-10 z-[-1] ">
          <svg
            width={75}
            height={75}
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
              fill="url(#paint0_linear_1179_4)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_4"
                x1="-1.63917e-06"
                y1="37.5"
                x2={75}
                y2="37.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13C296" stopOpacity="0.31" />
                <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
      <p className="text-center lg:mt-5 mt-3 font-semibold">
        Copyright © SM IT Solution 2024
      </p>
    </footer>
  );
};

export default Footer;
