import voiceCoverVideo from "../../assets/voice_section/voiceSectionVideo.webm";
import voiceImg from "../../assets/voice_section/voiceSection.png";
import "./VoiceSection.css";
//using AOS packages
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const VoiceSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="relative block md:flex justify-center items-center gap-8  my-16"
    >
      <div className="w-full md:w-[60%] md:h-[450px] lg:h-[600px] h-auto video-side px-4">
        <video
          className="w-[100%] h-auto pt-32 pb-10 md:pt-40 lg:pb-28 lg:pt-32 lg:px-6"
          autoPlay
          muted
          playsInline
          preload="auto"
          loop
        >
          <source src={voiceCoverVideo} type="video/mp4" />
        </video>
        <div className="md:w-1/2 absolute top-2 text-start text-gray-950">
          <h2 className="text-[22px] md:text-2xl lg:text-4xl font-bold lg:font-extrabold mt-6 md:mt-10 lg:mt-6 md:px-6">
            Make and use brand kits on videos professionally with just one
            click.
          </h2>
        </div>
        <div className="md:w-1/2 md:absolute md:bottom-6 flex items-center gap-3 md:gap-4 lg:gap-8 font-semibold pb-4 md:pb-10 lg:pb-0 pl-6 text-lg md:text-[22px]">
          <span className="text-gray-500 hover:text-gray-950 transition-colors ease-in-out delay-200">
            Trim
          </span>
          <span className="text-gray-500 hover:text-gray-950 transition-colors ease-in-out delay-200">
            Fade-in & out
          </span>
          <span className="text-gray-500 hover:text-gray-950 transition-colors ease-in-out delay-200">
            Loop
          </span>
          <span className="text-gray-500 hover:text-gray-950 transition-colors ease-in-out delay-200">
            Voiceover
          </span>
        </div>
      </div>
      <div className="relative w-full md:w-[40%] md:h-[450px] lg:h-[600px] h-auto bg-gray-100 rounded-3xl mt-8 md:mt-0 group">
        <h2 className="absolute top-6 md:to-pink-100 text-[22px] md:text-2xl lg:text-4xl font-bold lg:font-extrabold pl-6">
          Brands Kids
        </h2>
        <img
          className="py-28 md:py-24 lg:py-32 md:px-6 lg:px-20 px-16 group-hover:scale-105 ease-out
          transition"
          src={voiceImg}
          alt="Voice Section Image"
        />
        <p className="absolute text-base md:text-lg font-medium bottom-4 md:bottom-3 lg:bottom-6 px-6 text-gray-700">
          Generate diverse brand kits and easily apply them to videos in a
          single click.
        </p>
      </div>
    </section>
  );
};

export default VoiceSection;
