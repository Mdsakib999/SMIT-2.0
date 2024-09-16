import CareerBanner from "../../Components/CareerComponents/CareerBanner";
import CareerWithCountless from "../../Components/CareerComponents/CareerWithCountless";
import JobSection from "../../Components/CareerComponents/JobSection";

const Career = () => {
    return (
        <div className="-mt-12 py-12">
            <CareerBanner />
            <CareerWithCountless />
            <JobSection />
        </div>
    );
};

export default Career;