import Augment from "../../Components/HomeComponents/Augment";
import Banner from "../../Components/HomeComponents/Banner";
import Blog from "../../Components/HomeComponents/Blog";
import SectionTitle from "../../Components/Shared/SectionTitle";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import "./Home.css";

const Home = () => {
    useDocumentTitle('Home | Sm It Solution')
    return (
        <div>
            <Banner />
            <Augment />
            <Blog />
            <SectionTitle title={'Our Process'} description={'Thoughtful digital strategies'} />
        </div>

    );
};

export default Home;