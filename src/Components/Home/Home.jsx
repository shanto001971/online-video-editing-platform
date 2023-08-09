import Banner from "../BannerSection/Banner";
import SideIcon from "../SideIcon/SideIcon";
import TemplateVideo from "../TemplateVideoSection/TemplateVideo";
import VoiceSection from "../VoiceSection/VoiceSection";



const Home = () => {
    return (
        <div>
            <Banner/>
            <TemplateVideo />
            <VoiceSection/>
            <SideIcon/>
        </div>
    );
};

export default Home;