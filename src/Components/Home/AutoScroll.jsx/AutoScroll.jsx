import img1 from "../../../assets/img4.webp";
import img2 from "../../../assets/img5.webp";
import img3 from "../../../assets/img6.webp";
import img4 from "../../../assets/img7.webp";
import background from "../../../assets/background.webp";
import text from "../../../assets/text.webp";
import speech from "../../../assets/speech.webp";
import video from "../../../assets/video.webp";
import { useState } from "react";
import { useEffect } from "react";

const AutoScroll = () => {
  const [selectedCollapse, setSelectedCollapse] = useState('speech');

  const handleCollapseChange = (collapseName) => {
    setSelectedCollapse(collapseName);
  };

  const getImageForCollapse = () => {
    switch (selectedCollapse) {
      case 'speech':
        return img1;
      case 'text':
        return img2;
      case 'video':
        return img3;
      case 'background':
        return img4;
      default:
        return img1;
    }
  };
  useEffect(() => {
    const collapseNames = ['speech', 'text', 'video', 'background'];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % collapseNames.length;
      handleCollapseChange(collapseNames[nextIndex]);
      currentIndex = nextIndex;
    }, 3000); // Change image and collapse every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className=" lg:py-12 mx-auto ">
      {/* for mobile  */}
       <div  className='md:hidden'>

<div className='max-w-screen-md m-3 tracking-wide'>

<img src={img1} alt="" className='object-fill pt-3 md:pt-7' />
</div>
<div className='max-w-screen-md m-3  tracking-wide'>
<div className='flex justify-center gap-5 '>
    <span className='pt-3'> 
<img src={text} alt="" /></span>
<span >
    <p className='text-2xl font-bold'>
    Speech to Text

</p>
<p className='text-xl font-medium text-slate-600 py-2 '>
Use AI to automatically generate subtitles with near-perfect accuracy to make your video more accessible and compelling.

</p>
</span>
</div> 
<img src={img2} alt="" className='object-fill pt-3 ' />
</div>
<div className='max-w-screen-md m-3 tracking-wide'>
<div className='flex justify-center gap-5 '>
    <span className='pt-3'> 
<img src={speech} alt="" /></span>
<span >
    <p className='text-2xl font-bold '>Text to Speech


</p>
<p className='text-xl font-medium text-slate-600 py-2 '>
Convert text files into natural voiceovers to make your video content more informative and captivating.

</p>
</span>
</div> 
<img src={img3} alt="" className='object-fill pt-3 ' />
</div>
<div className='max-w-screen-md m-3  tracking-wide'>
<div className='flex justify-center gap-5 '>
    <span className='pt-3'> 
<img src={video} alt="" /></span>
<span >
    <p className='text-2xl font-bold'>Transcribe Video


</p>
<p className='text-xl font-medium text-slate-600 py-2 '>
Auto-transcribe video into text in different languages to make your video more searchable, accessible, and engaging.

</p>
</span>
</div> 
<img src={img4} alt="" className='object-fill pt-3' />
<div className='flex justify-center gap-5 pt-3'>
    <span className='pt-3'> 
<img src={background} alt="" /></span>
<span >
    <p className='text-2xl font-bold '> Remove Background




</p>
<p className='text-xl font-medium text-slate-600 py-2 '>
Remove video background to isolate people from the scene of a video or an image, making it more authentic and accessible.


</p>
</span>
</div> 
</div>
  </div> 
      {/* Container Box */}
      <div className=" flex max-w-screen-xl items-center overflow-hidden bg-white rounded shadow-sm lg:flex-row ">
        {/* Image Container */}
        <div className=" lg:w-1/2 h-full hidden md:block">
          <img
          src={getImageForCollapse()}
          alt="pops"
            className=" w-full  lg:h-full"
          />
        </div>
        {/* Details Container */}
        <div className=" p-2 bg-white lg:p-11 lg:pl-10  lg:w-1/2 hidden md:block">
          <div className="collapse ">
          <input
            type='radio'
            name='my-accordion-1'
            checked={selectedCollapse === 'speech'}
            onChange={() => handleCollapseChange('speech')}
          />            <div className="collapse-title shadow-xl text-xl font-medium flex items-center gap-5 ">
              <img src={speech} alt="" className="h-6" />

              <p> Speech to Text</p>
            </div>
            <div className="collapse-content font-medium text-slate-700  lg:pl-16 ">
              <p>
                Use AI to automatically generate subtitles with near-perfect
                accuracy to make your video more accessible and compelling.
              </p>
            </div>
          </div>

          <div className="collapse  ">
          <input
            type='radio'
            name='my-accordion-1'
            checked={selectedCollapse === 'text'}
            onChange={() => handleCollapseChange('text')}
          />            <div className="collapse-title  shadow-xl text-xl font-medium flex items-center gap-5 ">
              <img src={text} alt="" className="h-6" />

              <p> Text to Speech</p>
            </div>
            <div className="collapse-content font-medium text-slate-700 lg:pl-16 ">
              <p>
                Convert text files into natural voiceovers to make your video
                content more informative and captivating.
              </p>
            </div>
          </div>
          <div className="collapse ">
          <input
            type='radio'
            name='my-accordion-1'
            checked={selectedCollapse === 'video'}
            onChange={() => handleCollapseChange('video')}
          />            <div className="collapse-title  shadow-xl text-xl font-medium flex items-center gap-5">
              <img src={video} alt="" className="h-6" />
              <p> Transcribe Video</p>{" "}
            </div>
            <div className="collapse-content font-medium text-slate-700  lg:pl-16 ">
              <p>
                Auto-transcribe video into text in different languages to make
                your video more searchable, accessible, and engaging.
              </p>
            </div>
          </div>
          <div className="collapse ">
          <input
            type='radio'
            name='my-accordion-1'
            checked={selectedCollapse === 'background'}
            onChange={() => handleCollapseChange('background')}
          />            <div className="collapse-title  shadow-xl text-xl font-medium flex items-center gap-5">
              <img src={background} alt="" className="h-6" />
              <p> Remove Background</p>{" "}
            </div>
            <div className="collapse-content font-medium text-slate-700  lg:pl-16 ">
              <p>
                Remove video background to isolate people from the scene of a
                video or an image, making it more authentic and accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoScroll;
