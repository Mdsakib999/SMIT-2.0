import Contact from "../../Components/Contact";
import Banner from "../../Components/HomeComponents/Banner";
import OurTeam from "../../Components/OurTeam";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Banner />


            {/* Out team */}
            <OurTeam></OurTeam>

            {/* Contact */}
            {/* <Contact></Contact> */}
        </div>

    );
};

export default Home;