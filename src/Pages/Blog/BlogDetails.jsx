import { Link, useParams } from "react-router-dom";
import { blogData } from "../../utils/BlogData";
import { useEffect } from "react";

const BlogDetails = () => {
    const { id } = useParams()
    const filterData = blogData.find(item => item.id == id)
    const relatedData = blogData.filter(item => item.id !== id)
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [])
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
                <div>
                    <h1 className="text-2xl  font-bold">Related <span className="text-orange-400" >Blog</span></h1>
                    <span className="inline-block bg-orange-200 size-8 rounded-full -mt-96 bg-opacity-50 "></span>
                </div>
                <div className="mt-4 ms-8 space-y-8">
                    {
                        relatedData.map((item, index) => (
                            <Link to={`/blog/${item.id}`} onClick={handelClick} key={index} className=" shadow-md flex gap-2 max-w-[80%] rounded-xl">
                                <img src={item.img} className="size-28 rounded-xl " alt="" />
                                <div>
                                    <p className="">
                                        <span className="text-black text-xl font-bold">{item.department}</span> -
                                        <small> {item.date}</small></p>
                                    <h1 className="text-2xl font-bold">{item.title}</h1>
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