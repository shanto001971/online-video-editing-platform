import img from '../../../public/Team.png';
import video from '../../../public/Fluid_Animations_86db7504d9.mp4';

const VideoLayout = () => {
	return (
		<div className="md:flex w-[100%] h-[100vh]">
			<div className="w-[500px] border my-10 ml-10 p-8 bg-gray-100 rounded-3xl">
				<h2 className="text-3xl font-bold">
					Add your team and collaborate on your video
				</h2>
				<img className="my-16" src={img} alt="" />
				<h4>
					Create, edit, comment, and share your videos together with
					your team members.
				</h4>
			</div>
			<div className="border m-10 bg-blue-900 rounded-3xl">
				<h2 className="text-3xl font-bold p-8">
					Attractive Animations
				</h2>
				<video autoPlay loop className="h-[300px] w-full">
					<source className="w-full" src={video} type="video/mp4" />
				</video>
			</div>
		</div>
	);
};

export default VideoLayout;

// import img from '../../../public/Team.png';
// import video from '../../../public/Fluid_Animations_86db7504d9.mp4';

// const HomeLayout = () => {
// 	return (
// 		<div className="md:flex w-[100%] h-[100vh]">
// 			<div className="w-[500px] border my-10 ml-10 p-8 bg-gray-100 rounded-3xl">
// 				<h2 className="text-3xl font-bold">
// 					Add your team and collaborate on your video
// 				</h2>
// 				<img className="my-16" src={img} alt="" />
// 				<h4>
// 					Create, edit, comment, and share your videos together with
// 					your team members.
// 				</h4>
// 			</div>
// 			<div className="border m-10 bg-blue-900 rounded-3xl">
// 				<h2 className="text-3xl font-bold p-8">
// 					Attractive Animations
// 				</h2>
// 				<video autoPlay loop className="h-[300px] w-full">
// 					<source className="w-full" src={video} type="video/mp4" />
// 				</video>
// 			</div>
// 		</div>
// 	);
// };
