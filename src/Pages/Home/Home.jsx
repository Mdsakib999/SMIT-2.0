import Augment from "../../Components/HomeComponents/Augment";
import Banner from "../../Components/HomeComponents/Banner";
import Blog from "../../Components/HomeComponents/Blog";
import CountIngDiv from "../../Components/HomeComponents/CountIngDiv";
import HomeAbout from "../../Components/HomeComponents/HomeAbout";
import HomeContact from "../../Components/HomeComponents/HomeContact";
import HomeFAQ from "../../Components/HomeComponents/HomeFAQ";
import OurTeam from "../../Components/HomeComponents/OurTeam";
import SectionTitle from "../../Components/Shared/SectionTitle";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import "./Home.css";

const Home = () => {
    useDocumentTitle('Home | Sm It Solution')
    return (
        <div>
            <Banner />


            <HomeAbout></HomeAbout>


            
            <SectionTitle title={'Our Process'} description={'Thoughtful Digital Strategies'} />
            
            <Augment />

            <HomeFAQ></HomeFAQ>


            {/* Dynamic countup number */}
           <CountIngDiv></CountIngDiv>

            {/* Out team */}
            <OurTeam></OurTeam>


            <Blog />

            {/* Contact */}
            <HomeContact></HomeContact>
 

        </div>

    );
};

export default Home;