import { useParams } from "react-router-dom";
import { blogData } from "../../utils/BlogData";

const BlogDetails = () => {
    const { id } = useParams()
    const filterData = blogData.find(item => item.id == id)
    console.log(filterData);
    return (
        <div>

        </div>
    );
};

export default BlogDetails;