import Banner from '../BannerSection/Banner';
import VideoLayout from '../Pages/VideoLayout/VideoLayout';
import TemplateVideo from '../TemplateVideoSection/TemplateVideo';
import VoiceSection from '../VoiceSection/VoiceSection';
import ScrollSection from './ScrollSection/ScrollSection';

const Home = () => {
	return (
		<div>
			<Banner />
			<TemplateVideo />
			<VoiceSection />
			<VideoLayout></VideoLayout>
			<ScrollSection />
		</div>
	);
};

export default Home;
