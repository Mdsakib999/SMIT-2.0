import { Link } from "react-router-dom";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import AboutContact from "./AboutContact";

const About = () => {
    useDocumentTitle(`About | SM IT Solution`)
    return (
        <div className="-mt-12 py-32">
           

           <AboutContact></AboutContact>
        </div>
    );
};

export default About;