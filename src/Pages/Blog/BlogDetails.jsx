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
    const handelClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setLiked(false)
    }

    const handleLikeClick = () => {
        setLiked(!liked);

    };
    return (
        <div className="bg-[#F8F8FA] w-full  -mt-32 py-32 ">
            <div className="w-[95%] lg:w-[60%] bg-white h-fit rounded-xl mx-auto shadow-lg">
                <div className="p-8">
                    <span className="uppercase rounded-md bg-[#EB3B84] text-white px-4 py-1 font-bold">
                        {filterData.department}
                    </span>
                    <h1 className="text-2xl font-bold mt-4">{filterData.title}</h1>
                    <img
                        src={filterData.img}
                        className="h-[300px] w-full mt-4 rounded-xl object-cover"
                        alt=""
                    />

                    <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center space-x-2">
                            <div
                                className={`cursor-pointer rounded-full p-2 ${liked ? 'bg-red-100' : 'bg-gray-100'}`}
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


            <div className="w-[95%] lg:w-[60%] mx-auto mt-16">
                <div>
                    <h1 className="text-lg md:text-2xl  font-bold">Related <span className="text-orange-400" >Blog</span></h1>
                    <span className="inline-block bg-orange-200 size-8 rounded-full -mt-96 bg-opacity-50 "></span>
                </div>
                <div className="mt-4 ms-3 md:ms-8 space-y-8">
                    {
                        relatedData.map((item, index) => (
                            <Link to={`/blog/${item.id}`} onClick={handelClick} key={index} className=" shadow-md flex gap-4 md:max-w-[80%] rounded-xl">
                                <img src={item.img} className="size-28 rounded-xl " alt="" />
                                <div>
                                    <p className="">
                                        <span className="text-black text-base md:text-xl font-bold">{item.department}</span> -
                                        <small> {item.date}</small></p>
                                    <h1 className="text-lg md:text-xl font-bold mt-2">{item.title}</h1>
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