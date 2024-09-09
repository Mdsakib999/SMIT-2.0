import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import logo from '../../assets/SMIT_LOGO.png';
import { navData } from '../../utils/navData';


const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);
    const [index, setIndex] = useState(null)

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='shadow-md w-full fixed top-0 bg-gray-50  z-30'>
            <div className='   flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-black '>
                {/* Logo */}
                <Link to="/" className='flex justify-center items-center gap-2'>
                    <img src={logo} alt="img" className='size-10  rounded-full' />
                    <p className='font-manrope font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-600 to-amber-400 font-Dancing'>SM IT SOLUTION</p>
                </Link>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex'>
                    {navData?.map(item => (

                        <li key={item.id} className="relative group px-3 py-2">
                            <NavLink
                                to={item.link}
                                className={({ isActive }) =>
                                    isActive ? "hover:opacity-70  cursor-pointer font-semibold lg:text-lg text-orange-400" : "hover:opacity-70  cursor-pointer font-semibold lg:text-lg"
                                }
                            // aria-haspopup="true"
                            >
                                {item.title}
                            </NavLink>
                            {
                                item.children && <div className="absolute top-2 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[500px] transform">
                                    <div className="relative top-6 p-4 bg-white rounded-xl shadow-xl w-full">
                                        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>

                                        <div className="relative w-full px-8 z-10">
                                            <div className=" gap-6">
                                                <div>

                                                    <ul className="mt-3 grid grid-cols-2 gap-x-8  text-[15px]">
                                                        {
                                                            item.children.map(i => (
                                                                <li key={i.id}>
                                                                    <NavLink
                                                                        to={i.link}
                                                                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                                    >
                                                                        {i.title}
                                                                    </NavLink>
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


                    ))}
                    <Link
                        className="ms-6 -mb-[6px] rounded-lg flex justify-center items-center text-orange-500 px-6 py-2 border border-orange-500 bg-white shadow-md hover:bg-orange-500 hover:text-white transition-colors duration-300 ease-in-out transform hover:translate-y-[-2px] focus:outline-none"
                        to={`/contact`}
                    >
                        <span className="mr-2">Contact</span>
                        <span className="text-lg">→</span>
                    </Link>


                </ul>

                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className='block z-40 text-black md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full overflow-y-auto border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                    }
                >
                    {/* Mobile Logo */}
                    <Link to="/" className='flex justify-center items-center gap-2'>
                        <img src={logo} alt="img" className='size-10  rounded-full' />
                        <p className='font-manrope font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-600 to-amber-400'>SM IT SOLUTION</p>
                    </Link>

                    {/* Mobile Navigation Items */}
                    <div className='flex flex-col justify-center gap-4 mt-8'>
                        {navData.map(item => (
                            <li key={item?.id} className=''>

                                <div className='p-4 flex  items-center justify-between rounded-xl text-white  duration-300 cursor-pointer border-gray-600'>
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
                                            className={`overflow-hidden transition-all space-y-2 duration-300 ease-in-out ms-3 ${index === item.id ? ' py-2 opacity-100' : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            {item.children.map(i => (
                                                <Link
                                                    to={i.link}
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
                        <Link
                            className="lg:ms-6 lg:-mb-[6px] rounded-lg flex justify-center items-center text-orange-500 px-6 py-2 border border-orange-500 bg-white shadow-md hover:bg-orange-500 hover:text-white transition-colors duration-300 ease-in-out transform hover:translate-y-[-2px] focus:outline-none"
                            to={`/contact`}
                        >
                            <span className="mr-2">Contact</span>
                            <span className="text-lg">→</span>
                        </Link>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;