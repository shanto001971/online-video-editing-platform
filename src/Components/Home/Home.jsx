import Banner from "../BannerSection/Banner";
import SideIcon from "../SideIcon/SideIcon";
import TemplateVideo from "../TemplateVideoSection/TemplateVideo";
import VoiceSection from "../VoiceSection/VoiceSection";
import ScrollSection from "./ScrollSection/ScrollSection";



const Home = () => {
    return (
        <div>
            <Banner/>
            <TemplateVideo />
            <VoiceSection/>
            <ScrollSection/>
            <SideIcon/>
        </div>
    );
};

export default Home;