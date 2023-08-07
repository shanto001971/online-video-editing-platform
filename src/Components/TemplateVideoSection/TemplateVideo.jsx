import HoverVideoPlayer from 'react-hover-video-player';
import video1 from "../../assets/videos/video1.mp4";
import video2 from "../../assets/videos/video2.mp4";
import video3 from "../../assets/videos/video3.mp4";
import video4 from "../../assets/videos/video4.mp4";
import video5 from "../../assets/videos/video5.mp4";
import video6 from "../../assets/videos/video6.mp4";

const TemplateVideo = () => {
    return (
        <div className='mt-10 mb-10'>
            <h3 className='text-5xl font-bold mb-10'>Free Video <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-clip-text text-transparent'>Template</span></h3>
            <div className='grid grid-rows-2 grid-flow-col gap-6'>
                <HoverVideoPlayer className='row-span-2'
                    videoSrc={video1}
                    pausedOverlay={
                        <img
                            src="thumbnail-image.jpg"
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                width: '100%',
                                height: '80%',
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
                    videoSrc={video2}
                    pausedOverlay={
                        <img
                            src="thumbnail-image.jpg"
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                width: '100%',
                                height: '75%',
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
                    videoSrc={video3}
                    pausedOverlay={
                        <img
                            src="thumbnail-image.jpg"
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                width: '100%',
                                height: '75%',
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
                    videoSrc={video4}
                    pausedOverlay={
                        <img
                            src="thumbnail-image.jpg"
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                width: '100%',
                                height: '80%',
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
                    videoSrc={video5}
                    pausedOverlay={
                        <img
                            src="thumbnail-image.jpg"
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
                    videoSrc={video6}
                    pausedOverlay={
                        <img
                            src="thumbnail-image.jpg"
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