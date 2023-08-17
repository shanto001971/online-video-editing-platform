import HoverVideoPlayer from 'react-hover-video-player';
import video1 from "../../assets/videos/video1.mp4";
import video2 from "../../assets/videos/video2.mp4";
import video3 from "../../assets/videos/video3.mp4";
import video4 from "../../assets/videos/video4.mp4";
import video5 from "../../assets/videos/video5.mp4";
import video6 from "../../assets/videos/video6.mp4";
import img1 from '../../assets/images/Timg1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';
import img5 from '../../assets/images/img5.png';
import img6 from '../../assets/images/img6.png';


const TemplateVideo = () => {
    return (
        <div className='mt-10 mb-10'>
            <h3 className='text-5xl font-bold mb-10 ml-10'>Free Video <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-clip-text text-transparent'>Template</span></h3>
            <div className='grid grid-rows-2 grid-flow-col gap-6'>
                <HoverVideoPlayer className='row-span-2'
                    videoSrc={video1} videoStyle={{ width: "100%", height: "100%", borderRadius: "15px" }}
                    pausedOverlay={
                        <img
                            src={img1}
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    }
                    loadingOverlay={
                        <div className="loading-overlay">
                            <div className="loading-spinner" />
                        </div>
                    }
                />
                <HoverVideoPlayer className='row-span-1'
                    videoSrc={video2} videoStyle={{ width: "100%", height: "100%", borderRadius: "15px" }}
                    pausedOverlay={
                        <img
                            src={img2}
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    }
                    loadingOverlay={
                        <div className="loading-overlay">
                            <div className="loading-spinner" />
                        </div>
                    }
                />
                <HoverVideoPlayer className='row-span-1'
                    videoSrc={video3} videoStyle={{ width: "100%", height: "100%", borderRadius: "15px" }}
                    pausedOverlay={
                        <img
                            src={img3}
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    }
                    loadingOverlay={
                        <div className="loading-overlay">
                            <div className="loading-spinner" />
                        </div>
                    }
                />
                <HoverVideoPlayer className='row-span-2'
                    videoSrc={video4} videoStyle={{ width: "100%", height: "100%", borderRadius: "15px" }}
                    pausedOverlay={
                        <img
                            src={img4}
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    }
                    loadingOverlay={
                        <div className="loading-overlay">
                            <div className="loading-spinner" />
                        </div>
                    }
                />
                <HoverVideoPlayer className='row-span-1'
                    videoSrc={video5} videoStyle={{ width: "100%", height: "100%", borderRadius: "15px" }}
                    pausedOverlay={
                        <img
                            src={img5}
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    }
                    loadingOverlay={
                        <div className="loading-overlay">
                            <div className="loading-spinner" />
                        </div>
                    }
                />
                <HoverVideoPlayer className='row-span-1'
                    videoSrc={video6} videoStyle={{ width: "100%", height: "100%", borderRadius: "15px" }}
                    pausedOverlay={
                        <img
                            src={img6}
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    }
                    loadingOverlay={
                        <div className="loading-overlay">
                            <div className="loading-spinner" />
                        </div>
                    }
                />

            </div>
        </div>
    );
};

export default TemplateVideo;