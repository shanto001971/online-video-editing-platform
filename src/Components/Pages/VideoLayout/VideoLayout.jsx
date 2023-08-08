import img from '../../../../public/Team.png';
import video from '../../../../public/Fluid_Animations_86db7504d9.mp4';

const VideoLayout = () => {
	return (
		<div className="md:flex h-[100vh] my-10">
			<div className="border mr-10 p-8 bg-gray-100 rounded-3xl">
				<h2 className="text-3xl font-bold">
					Add your team and collaborate on your video
				</h2>
				<img className="my-16" src={img} alt="" />
				<h4>
					Create, edit, comment, and share your videos together with
					your team members.
				</h4>
			</div>
			<div className="border bg-blue-300 rounded-3xl">
				<h2 className="text-3xl font-bold p-8">
					Attractive Animations
				</h2>

				<video
					autoPlay
					loop
					muted
					playsInline
					preload="auto"
					className="h-[300px] w-[100vw]"
				>
					<source className="w-full" src={video} type="video/mp4" />
				</video>
			</div>
		</div>
	);
};

export default VideoLayout;
