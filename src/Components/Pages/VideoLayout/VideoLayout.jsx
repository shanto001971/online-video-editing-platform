import img from '../../../../public/Team.png';
import video from '../../../../public/Fluid_Animations_86db7504d9.mp4';

const VideoLayout = () => {
	return (
		<div className="md:flex md:h-[100vh] my-10">
			<div className="md:w-auto border p-8 mr-8 mb-5 md:mb-0 bg-gray-100 rounded-3xl ">
				<h2 className="text-3xl font-bold">
					Add your team and collaborate on your video
				</h2>
				<img className="my-16" src={img} alt="" />
				<h4>
					Create, edit, comment, and share your videos together with
					your team members.
				</h4>
			</div>
			<div className="border h-auto bg-[#A3F3FF] rounded-3xl">
				<h2 className="text-3xl font-bold py-10">
					Attractive Animations
				</h2>

				<video
					autoPlay
					loop
					muted
					playsInline
					preload="auto"
					className=" md:h-[300px] w-[100vw]"
				>
					<source className="w-full" src={video} type="video/mp4" />
				</video>
				<ul className="flex gap-x-3 md:text-2xl text-gray-400 font-semibold py-10 pl-5 md:pl-10">
					<li>Slide</li>
					<li>Blur</li>
					<li>Bounce</li>
					<li>Spin</li>
					<li>Disco</li>
				</ul>
			</div>
		</div>
	);
};

export default VideoLayout;
