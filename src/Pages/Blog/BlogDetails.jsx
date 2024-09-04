import { Link, useParams } from "react-router-dom";
import { blogData } from "../../utils/BlogData";
import { useEffect } from "react";

const BlogDetails = () => {
    const { id } = useParams()
    const filterData = blogData.find(item => item.id == id)
    const relatedData = blogData.filter(item => item.id !== id)
    useEffect(() => {
        // window.scrollTo({ top: 0 });
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
    }
    return (
        <div className="bg-[#F8F8FA] w-full  -mt-32 py-32 ">
            <div className="w-[60%] bg-white h-fit rounded-xl mx-auto  ">
                <div className="p-8">
                    <span className="uppercase rounded-md bg-[#EB3B84] text-white px-4 py-1  font-bold">{filterData.department}</span>
                    <h1 className="text-2xl font-bold mt-4">{filterData.title}</h1>
                    <img src={filterData.img} className="h-[300px] w-full mt-4 rounded-xl" alt="" />
                    <div className=" space-y-3 mt-8">
                        {
                            filterData?.description?.map((item, index) => <p key={index}>{item}</p>)
                        }
                    </div>
                </div>
            </div>
            <div className="w-[60%] mx-auto mt-16">
                <div className=" border-t-2 relative  mb-10">
                    <h1 className="text-2xl  font-bold mt-7">Related <span className="text-orange-400 " >Blog</span></h1>
                    <span className="inline-block bg-orange-400 size-8 rounded-full bg-opacity-50 absolute top-3 left-[-20px] animate-pulse "></span>

                </div>
                <div className="mt-4 ms-8 space-y-8">
                    {
                        relatedData.map((item, index) => (
                            <Link to={`/blog/${item.id}`} onClick={handelClick} key={index} className=" shadow-md flex gap-4 items-center max-w-[80%] rounded-xl py-3 px-2 bg-white">
                                <img src={item.img} className="w-36 rounded-lg " alt="" />
                                <div>
                                    <p className="">
                                        <span className={`inline-block ${backgroundColors[index % backgroundColors.length]} text-[#160f3a] text-sm font-semibold px-4 rounded-full py-1`}>{item.department}</span> -
                                        <small> {item.date}</small></p>
                                    <h1 className="text-xl font-bold">{item.title}</h1>
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