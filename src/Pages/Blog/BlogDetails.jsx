import { useParams } from "react-router-dom";
import { blogData } from "../../utils/BlogData";
import { useEffect } from "react";

const BlogDetails = () => {
    const { id } = useParams()
    const filterData = blogData.find(item => item.id == id)
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [])
    return (
        <div className="bg-[#F8F8FA] w-full  -mt-32 pt-32 ">
            <div className="w-[60%] bg-white h-fit rounded-xl mx-auto  ">
                <div className="p-8">
                    <span className="uppercase rounded-md bg-[#EB3B84] text-white px-4 py-1  font-bold">{filterData.department}</span>
                    <h1 className="text-2xl font-bold mt-4">{filterData.title}</h1>
                    <img src={filterData.img} className="h-[300px] w-full mt-4 rounded-xl" alt="" />
                    <div className=" space-y-3 mt-4">
                        {
                            filterData?.description?.map((item, index) => <p key={index}>{item}</p>)
                        }
                    </div>
                </div>
            </div>
            <div className="w-[60%]">

            </div>
        </div>
    );
};

export default BlogDetails;