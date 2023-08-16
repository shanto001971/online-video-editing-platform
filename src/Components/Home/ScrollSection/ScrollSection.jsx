import { useState, useEffect } from 'react';
import img1 from '../../../assets/img1.png';
import img2 from '../../../assets/img2.webp';
import img3 from '../../../assets/img3.webp';


const ScrollSection = () => {
  const images = [img1, img2, img3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const imageIndex = Math.floor(scrollPosition / window.innerHeight) % images.length;
    setCurrentImageIndex(imageIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  <>
  <p className='text-5xl md:text-center font-bold my-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text'>Use the full power of video <br /> <span className=''>to grow your brand
</span>
</p>
  <div  className='lg:hidden'>

<div className='max-w-screen-md m-3 md:m-8 p-3 md:p-7 tracking-wide'>
<div className='flex justify-center gap-5 md:gap-9 '>
    <span className='pt-3'> 
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="iv-w-8 iv-h-32 sm:iv-w-5 sm:iv-h-[20px]"><path fillRule="evenodd" clipRule="evenodd" d="M19.5198 15.1748C19.7795 14.9151 20.1316 14.7692 20.4989 14.7692H22.6154C23.3801 14.7692 24 15.3891 24 16.1538V22.6154C24 23.3801 23.3801 24 22.6154 24H12C11.4902 24 11.0769 23.5867 11.0769 23.0769C11.0769 22.5671 11.4902 22.1538 12 22.1538H14.7692V20.4989C14.7692 20.1316 14.9151 19.7795 15.1748 19.5198L19.5198 15.1748ZM16.6154 22.1538H22.1538V16.6154H20.69L16.6154 20.69V22.1538Z" fill="#00A0F5"></path><path fillRule="evenodd" clipRule="evenodd" d="M15.6923 4.99774L12.9231 7.76697V9.7715L16.1538 13.0023L19.9253 9.23077L15.6923 4.99774ZM14.8484 14.3077L11.3473 17.8088C10.9868 18.1693 10.9868 18.7538 11.3473 19.1143C11.7078 19.4747 12.2922 19.4747 12.6527 19.1143L21.5571 10.2098C22.0979 9.66911 22.0979 8.79242 21.5571 8.2517L16.6714 3.36595C16.1307 2.82523 15.254 2.82522 14.7132 3.36595L11.4825 6.59672C11.2228 6.85639 11.0769 7.20857 11.0769 7.57579V9.96267C11.0769 10.3299 11.2228 10.6821 11.4825 10.9417L14.8484 14.3077Z" fill="#00A0F5"></path><path fillRule="evenodd" clipRule="evenodd" d="M0 1.38461C0 0.619912 0.619915 0 1.38462 0H7.84616C8.61086 0 9.23077 0.619914 9.23077 1.38462V22.6154C9.23077 23.3801 8.61086 24 7.84615 24H1.38461C0.619912 24 0 23.3801 0 22.6154V1.38461ZM1.84615 1.84615V22.1538H7.38462V1.84615H1.84615Z" fill="#00A0F5"></path><path d="M6 19.3846C6 20.1493 5.38009 20.7692 4.61538 20.7692C3.85068 20.7692 3.23077 20.1493 3.23077 19.3846C3.23077 18.6199 3.85068 18 4.61538 18C5.38009 18 6 18.6199 6 19.3846Z" fill="#00A0F5"></path></svg>
</span>
<span >
    <p className='text-3xl font-bold md:w-4/6'>Set your brand up for social media success
</p>
<p className='text-xl font-medium text-slate-300 py-2 md:py-5'>Plan and execute a video content strategy that will significantly increase your brand’s exposure, awareness and engagement.
</p>
</span>
</div> 
<img src={img1} alt="" className='object-fill pt-3 md:pt-7' />
</div>
<div className='max-w-screen-md m-3 md:m-8 p-3 md:p-7 tracking-wide'>
<div className='flex justify-center gap-5 md:gap-9 '>
    <span className='pt-3'> 
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="iv-w-8 iv-h-32 sm:iv-w-5 sm:iv-h-[20px]"><path fillRule="evenodd" clipRule="evenodd" d="M8.26 5.32739C8.44953 5.11888 8.71823 5 9 5H23C23.2818 5 23.5505 5.11888 23.74 5.32739L28.74 10.8283C29.0748 11.1966 29.0877 11.7551 28.7704 12.1385L16.7704 26.6378C16.5804 26.8674 16.298 27.0002 16 27.0002C15.702 27.0002 15.4196 26.8674 15.2296 26.6378L3.22962 12.1385C2.91228 11.7551 2.92523 11.1966 3.26001 10.8283L8.26 5.32739ZM8.62607 7.89813L9.57238 10.5009H6.2603L8.62607 7.89813ZM6.12569 12.5009H10.2871L13.2595 21.1205L6.12569 12.5009ZM18.7405 21.1205L25.8743 12.5009H21.7129L18.7405 21.1205ZM22.4276 10.5009H25.7397L23.3739 7.89813L22.4276 10.5009ZM21.5724 7H18.2603L20.6261 9.60279L21.5724 7ZM18.7397 10.5009L16 7.48674L13.2603 10.5009H18.7397ZM12.4026 12.5009H19.5974L16 22.9328L12.4026 12.5009ZM11.3739 9.60279L13.7397 7H10.4276L11.3739 9.60279Z" fill="#DC2D83"></path></svg>
</span>
<span >
    <p className='text-3xl font-bold md:w-4/6'>Start a new revenue stream
</p>
<p className='text-xl font-medium text-slate-300 py-2 md:py-5'>Turn video into a monetizable asset that helps you gain new customers and scale your business.
</p>
</span>
</div> 
<img src={img2} alt="" className='object-fill pt-3 md:pt-7' />
</div>
<div className='max-w-screen-md m-3 md:m-8 p-3 md:p-7 tracking-wide'>
<div className='flex justify-center gap-5 md:gap-9 '>
    <span className='pt-3'> 
<svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="iv-w-8 iv-h-32 sm:iv-w-5 sm:iv-h-[20px]"><path d="M15 8C15.5523 8 16 8.44772 16 9V16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H15C14.4477 18 14 17.5523 14 17V9C14 8.44772 14.4477 8 15 8Z" fill="#8437BD"></path><path fillRule="evenodd" clipRule="evenodd" d="M2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16ZM16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4Z" fill="#8437BD"></path></svg>
</span>
<span >
    <p className='text-3xl font-bold md:w-4/6'>Save time and optimize your workflow
</p>
<p className='text-xl font-medium text-slate-300 py-2 md:py-5'>Increase the scale and speed of your video creation. Save time, maximize resources and lower production costs.
</p>
</span>
</div> 
<img src={img3} alt="" className='object-fill pt-3 md:pt-7' />
</div>
  </div>
   <div className='hidden lg:block'>
     <div className="flex my-11 scroll-smooth">
     <div className="w-1/2 overflow-y-auto">
        {/* Scrolling Content */}
        <div className="p-8 pl-10">
<div className='flex justify-start gap-9'>
    <span className='pt-3'> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="iv-w-8 iv-h-32 sm:iv-w-5 sm:iv-h-[20px]"><path fillRule="evenodd" clipRule="evenodd" d="M19.5198 15.1748C19.7795 14.9151 20.1316 14.7692 20.4989 14.7692H22.6154C23.3801 14.7692 24 15.3891 24 16.1538V22.6154C24 23.3801 23.3801 24 22.6154 24H12C11.4902 24 11.0769 23.5867 11.0769 23.0769C11.0769 22.5671 11.4902 22.1538 12 22.1538H14.7692V20.4989C14.7692 20.1316 14.9151 19.7795 15.1748 19.5198L19.5198 15.1748ZM16.6154 22.1538H22.1538V16.6154H20.69L16.6154 20.69V22.1538Z" fill="#00A0F5"></path><path fillRule="evenodd" clipRule="evenodd" d="M15.6923 4.99774L12.9231 7.76697V9.7715L16.1538 13.0023L19.9253 9.23077L15.6923 4.99774ZM14.8484 14.3077L11.3473 17.8088C10.9868 18.1693 10.9868 18.7538 11.3473 19.1143C11.7078 19.4747 12.2922 19.4747 12.6527 19.1143L21.5571 10.2098C22.0979 9.66911 22.0979 8.79242 21.5571 8.2517L16.6714 3.36595C16.1307 2.82523 15.254 2.82522 14.7132 3.36595L11.4825 6.59672C11.2228 6.85639 11.0769 7.20857 11.0769 7.57579V9.96267C11.0769 10.3299 11.2228 10.6821 11.4825 10.9417L14.8484 14.3077Z" fill="#00A0F5"></path><path fillRule="evenodd" clipRule="evenodd" d="M0 1.38461C0 0.619912 0.619915 0 1.38462 0H7.84616C8.61086 0 9.23077 0.619914 9.23077 1.38462V22.6154C9.23077 23.3801 8.61086 24 7.84615 24H1.38461C0.619912 24 0 23.3801 0 22.6154V1.38461ZM1.84615 1.84615V22.1538H7.38462V1.84615H1.84615Z" fill="#00A0F5"></path><path d="M6 19.3846C6 20.1493 5.38009 20.7692 4.61538 20.7692C3.85068 20.7692 3.23077 20.1493 3.23077 19.3846C3.23077 18.6199 3.85068 18 4.61538 18C5.38009 18 6 18.6199 6 19.3846Z" fill="#00A0F5"></path></svg>
</span>
<span >
    <p className='text-3xl font-bold md:w-4/6'>Set your brand up for social media success
</p>
<p className='text-xl font-medium text-slate-400'>Plan and execute a video content strategy that will significantly increase your brand’s exposure, awareness and engagement.
</p>
</span>
</div> 
<div className='flex justify-start gap-9 lg:my-64 '>
<svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="iv-w-8 iv-h-32 sm:iv-w-5 sm:iv-h-[20px]"><path fillRule="evenodd" clipRule="evenodd" d="M8.26 5.32739C8.44953 5.11888 8.71823 5 9 5H23C23.2818 5 23.5505 5.11888 23.74 5.32739L28.74 10.8283C29.0748 11.1966 29.0877 11.7551 28.7704 12.1385L16.7704 26.6378C16.5804 26.8674 16.298 27.0002 16 27.0002C15.702 27.0002 15.4196 26.8674 15.2296 26.6378L3.22962 12.1385C2.91228 11.7551 2.92523 11.1966 3.26001 10.8283L8.26 5.32739ZM8.62607 7.89813L9.57238 10.5009H6.2603L8.62607 7.89813ZM6.12569 12.5009H10.2871L13.2595 21.1205L6.12569 12.5009ZM18.7405 21.1205L25.8743 12.5009H21.7129L18.7405 21.1205ZM22.4276 10.5009H25.7397L23.3739 7.89813L22.4276 10.5009ZM21.5724 7H18.2603L20.6261 9.60279L21.5724 7ZM18.7397 10.5009L16 7.48674L13.2603 10.5009H18.7397ZM12.4026 12.5009H19.5974L16 22.9328L12.4026 12.5009ZM11.3739 9.60279L13.7397 7H10.4276L11.3739 9.60279Z" fill="#DC2D83"></path></svg>
<span >
    <p className='text-3xl font-bold md:w-4/6'>Start a new revenue stream

</p>
<p className='text-xl font-medium text-slate-400'>Turn video into a monetizable asset that helps you gain new customers and scale your business.

</p>
</span>
</div> 
<div className='flex justify-start gap-9'>
<svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="iv-w-8 iv-h-32 sm:iv-w-5 sm:iv-h-[20px]"><path d="M15 8C15.5523 8 16 8.44772 16 9V16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H15C14.4477 18 14 17.5523 14 17V9C14 8.44772 14.4477 8 15 8Z" fill="#8437BD"></path><path fillRule="evenodd" clipRule="evenodd" d="M2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16ZM16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4Z" fill="#8437BD"></path></svg>
<span >
    <p className='text-3xl font-bold md:w-4/6'>Save time and optimize your workflow

</p>
<p className='text-xl font-medium text-slate-400'>Increase the scale and speed of your video creation. Save time, maximize resources and lower production costs.

</p>
</span>
</div>       
        </div>
      </div>
      <div className="w-1/2">
        {/* Fixed Image */}
        <div
          className="h-96 overflow-hidden sticky top-24"
          style={{ zIndex: -1 }} // Push the image behind the content
        >
          <img
            src={images[currentImageIndex]}
            alt=""
            className="h-full w-full  rounded-xl"
          />
        </div>
      </div>
      
    </div>
   </div>
  </>
  );
};

export default ScrollSection;