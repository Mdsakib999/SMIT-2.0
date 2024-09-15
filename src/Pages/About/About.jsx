import useDocumentTitle from "../../Hooks/useDocumentTitle";
import AboutContact from "../../Components/AboutUsComponents/AboutContact";
import OurStory from "../../Components/AboutUsComponents/OurStory";
import Award from "../../Components/AboutUsComponents/Award";
import MissionAndVision from "../../Components/AboutUsComponents/MissionAndVisson";
import AboutCEO from "../../Components/AboutUsComponents/AboutCEO";
import { useEffect } from "react";

const About = () => {
    useDocumentTitle(`About | SM IT Solution`);
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [])
    return (
        <div className="-mt-12 py-12">
            
            <OurStory />
            <Award />
            <MissionAndVision />
            <AboutCEO></AboutCEO>
            <AboutContact></AboutContact>
        </div>
    );
};

export default About;