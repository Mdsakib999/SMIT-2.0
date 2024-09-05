// import Augment from "../../Components/HomeComponents/Augment";
import Augment from "../../Components/HomeComponents/Augment";
import Banner from "../../Components/HomeComponents/Banner";
import Blog from "../../Components/HomeComponents/Blog";
import CountIngDiv from "../../Components/HomeComponents/CountIngDiv";
import HomeAbout from "../../Components/HomeComponents/HomeAbout";
import HomeContact from "../../Components/HomeComponents/HomeContact";
import HomeFAQ from "../../Components/HomeComponents/HomeFAQ";
import OurTeam from "../../Components/HomeComponents/OurTeam";
import ServiceSection from "../../Components/HomeComponents/ServiceSection";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import "./Home.css";

const Home = () => {
    useDocumentTitle('Home | Sm It Solution')
    return (
        <div>
            <Banner />


            <HomeAbout></HomeAbout>

            <ServiceSection></ServiceSection>

            {/* Dynamic countup number */}
            <CountIngDiv></CountIngDiv>

            <Augment />

            <HomeFAQ></HomeFAQ>



            {/* Out team */}
            <OurTeam></OurTeam>


            <Blog />

            {/* Contact */}
            <HomeContact></HomeContact>

        </div>

    );
};

export default Home;