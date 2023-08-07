import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="lg:absolute top-1/4 p-10">
                <h1 className="text-6xl">Powerful video editing</h1>
                <p className="my-5 lg:my-10"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat <br /> sequi libero placeat  soluta suscipit fugiat praesentium porro officiis cumque iure?</p>
                <button className="cursor-pointer relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                    <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                        <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                        <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                    </span>
                    <span className="relative text-white">Edit Now</span>
                </button>
            </div>
            <div className="">
                <video loop autoPlay playsInline muted className="w-full h-full" src="https://assets-static.invideo.io/files/Powerful_Video_Editing_a2305fc88d.mp4" type="video/mp4"></video>
            </div>

            <div className="flex gap-5 lg:gap-10 lg:ml-10 absolute bottom-5">
                <Link>Trim</Link>
                <Link>Crop</Link>
                <Link>Transitions</Link>
                <Link>Text</Link>
                <Link>Stickers</Link>
            </div>
        </div>
    );
};

export default Banner;