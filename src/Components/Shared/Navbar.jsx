import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { navData } from '../../utils/navData';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import logo from '../../assets/SMIT_LOGO.png';


const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);
    const [index, setIndex] = useState(null)

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='shadow-md w-full fixed top-0 bg-gray-50 z-30'>
            <div className='   flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-black '>
                {/* Logo */}
                {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1> */}
                <Link to="/" className='flex justify-center items-center gap-2'>
                    <img src={logo} alt="img" className='size-10  rounded-full' />
                    <p>SM IT SOLUTION</p>
                </Link>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex'>
                    {navData?.map(item => (
                        // <li
                        //     key={item.id}
                        //     className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
                        // >
                        //     {item.text}
                        // </li>
                        // <>
                        <li key={item.id} className="relative group px-3 py-2">
                            <Link
                                to={item.link}
                                className="hover:opacity-70 cursor-pointer font-semibold lg:text-lg"
                            // aria-haspopup="true"
                            >
                                {item.title}
                            </Link>
                            {
                                item.children && <div className="absolute top-2 -left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[160px] transform">
                                    <div className="relative top-5 p-6 bg-white rounded-xl shadow-xl w-fit ">
                                        <div className="w-10 h-10 bg-white transform rotate-45 absolute -top-1 z-0 translate-x-0 transition-transform group-hover:translate-x-[-1rem] duration-500 ease-in-out rounded-sm "></div>

                                        <div className="relative px-8 z-10">
                                            <div className=" gap-6">
                                                <div>
                                                    <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                                                        {item.dowArrowText}
                                                    </p>
                                                    <ul className="mt-3 text-[15px]">
                                                        {
                                                            item.children.map(i => (
                                                                <li key={i.id}>
                                                                    <Link
                                                                        to={i.link}
                                                                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                                    >
                                                                        {i.title}
                                                                    </Link>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </li>
                        // </>

                    ))}
                </ul>

                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className='block z-40 text-black md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                    }
                >
                    {/* Mobile Logo */}
                    <div className='flex justify-center text-white items-center gap-2'>
                        <img src={logo} alt="img" className='size-10  rounded-full' />
                        <p>SM IT SOLUTION</p>
                    </div>

                    {/* Mobile Navigation Items */}
                    <div className='flex flex-col justify-center gap-4 mt-8'>
                        {navData.map(item => (
                            <li key={item?.id} className=''>

                                <div className='p-4 flex border-b  items-center justify-between rounded-xl text-white  duration-300 cursor-pointer border-gray-600'>
                                    <Link
                                        onClick={() => setNav(!nav)}
                                        to={item.link}
                                        key={item.id}

                                    >
                                        {item.title}
                                    </Link>
                                    {
                                        item.children && (
                                            <span onClick={() => {
                                                setIndex(prevIndex => (prevIndex === item.id ? null : item.id));

                                            }} className='text-xl text-white pt-2'><IoIosArrowDown />
                                            </span>
                                        )
                                    }
                                </div>


                                {
                                    item.children && (
                                        <ul
                                            className={`overflow-hidden transition-all space-y-2 duration-300 ease-in-out ms-3 ${index === item.id ? 'max-h-40 py-2 opacity-100' : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            {item.children.map(i => (
                                                <Link
                                                    onClick={() => setNav(!nav)}
                                                    className='text-white ps-3 py-2 block border-b rounded-full'
                                                    key={i?.id}
                                                >
                                                    {i.title}
                                                </Link>
                                            ))}
                                        </ul>
                                    )
                                }

                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;