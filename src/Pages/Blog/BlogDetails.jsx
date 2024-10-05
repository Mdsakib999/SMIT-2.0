import { Link, useParams } from "react-router-dom";
import { blogData } from "../../utils/BlogData";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";


const BlogDetails = () => {
    const { id } = useParams()
    const filterData = blogData.find(item => item.id == id)
    const relatedData = blogData.filter(item => item.id !== id)
    const [liked, setLiked] = useState(false);
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [])
    const backgroundColors = [
        // 'bg-[#C0B1FF]',  // Light purple
        'bg-[#FFD1C1]',  // Light coral
        'bg-[#C1FFD1]',  // Light green
        // 'bg-[#D1C1FF]',  // Light lavender
        'bg-[#FFC1D1]'   // Light pink
    ];
    const handelClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setLiked(false)
    }

    const handleLikeClick = () => {
        setLiked(!liked);

    };
    return (
        <div className="bg-[#F8F8FA] w-full   py-32 ">
            <div className="w-[95%] lg:w-[60%] bg-white h-fit rounded-xl mx-auto shadow-lg">
                <div className="p-8">
                    <span className="uppercase rounded-md bg-[#EB3B84] text-white px-4 py-1 font-bold">
                        {filterData.department}
                    </span>
                    <p className="text-2xl font-bold mt-4">{filterData.title}</p>
                    <img
                        src={filterData.img}
                        className="h-[300px] w-full mt-4 rounded-xl object-cover"
                        alt=""
                    />

                    <div className="flex justify-between items-center mt-4 pb-4 border-b ">
                        <div className="flex items-center space-x-2">
                            <div
                                className={`cursor-pointer rounded-full p-2 ${liked ? 'bg-red-100' : 'bg-orange-100'}`}
                                onClick={handleLikeClick}
                            >
                                <FaHeart
                                    className={`h-6 w-6 transition-all duration-300 ${liked ? 'text-red-500' : 'text-gray-400'}`}
                                />
                            </div>
                            <span className="text-gray-700 text-sm">
                                {liked ? "You liked this" : "Like this post"}
                            </span>
                        </div>
                        <p className="text-gray-500 text-sm">{filterData.date}</p>
                    </div>


                    <div className="space-y-3 mt-8">
                        {filterData?.description?.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="md:w-[60%] px-6 mx-auto mt-16">
                <div className=" border-t-2 relative  mb-10">
                    <h1 className="text-2xl  font-bold mt-7">Related <span className="text-orange-400 " >Blog</span></h1>
                    <span className="inline-block bg-orange-400 size-8 rounded-full bg-opacity-50 absolute top-3 left-[-20px] animate-pulse "></span>

                </div>
                <div className="mt-4 ms-0 md:ms-8 space-y-8">
                    {
                        relatedData.map((item, index) => (
                            <Link to={`/blog/${item.id}`} onClick={handelClick} key={index} className=" shadow-md flex flex-col md:flex-row gap-4 items-center md:max-w-[80%] rounded-xl md:py-3 md:px-2 p-4 md:p-0 bg-white">
                                <img src={item.img} className="w-full md:w-36 rounded-lg " alt="" />
                                <div>
                                    <p className="">
                                        <span className={`inline-block ${backgroundColors[index % backgroundColors.length]} text-[#160f3a] text-sm font-semibold px-4 rounded-full py-1`}>{item.department}</span> -
                                        <small> {item.date}</small></p>
                                    <p className="text-xl font-bold">{item.title}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;