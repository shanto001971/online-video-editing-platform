import React, { useState, useEffect } from 'react';
import img1 from '../../../assets/img1.png';
import img2 from '../../../assets/img2.webp';
import img3 from '../../../assets/img3.webp';

const ScrollSection = () => {
  const images = [img1, img2, img3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const imageIndex = Math.floor(scrollPosition / window.innerHeight) % images.length;
      setCurrentImageIndex(imageIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [images.length]);

  return (
    <div className="flex my-6">
      <div className="w-1/2">
        {/* Autoplaying Image */}
        <img src={images[currentImageIndex]} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="w-1/2 overflow-y-auto">
        {/* Scrolling Content */}
        <div className="p-8">
          {/* Your scrolling content goes here */}
<div className='flex'>
    <span> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="iv-w-8 iv-h-32 sm:iv-w-5 sm:iv-h-[20px]"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.5198 15.1748C19.7795 14.9151 20.1316 14.7692 20.4989 14.7692H22.6154C23.3801 14.7692 24 15.3891 24 16.1538V22.6154C24 23.3801 23.3801 24 22.6154 24H12C11.4902 24 11.0769 23.5867 11.0769 23.0769C11.0769 22.5671 11.4902 22.1538 12 22.1538H14.7692V20.4989C14.7692 20.1316 14.9151 19.7795 15.1748 19.5198L19.5198 15.1748ZM16.6154 22.1538H22.1538V16.6154H20.69L16.6154 20.69V22.1538Z" fill="#00A0F5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6923 4.99774L12.9231 7.76697V9.7715L16.1538 13.0023L19.9253 9.23077L15.6923 4.99774ZM14.8484 14.3077L11.3473 17.8088C10.9868 18.1693 10.9868 18.7538 11.3473 19.1143C11.7078 19.4747 12.2922 19.4747 12.6527 19.1143L21.5571 10.2098C22.0979 9.66911 22.0979 8.79242 21.5571 8.2517L16.6714 3.36595C16.1307 2.82523 15.254 2.82522 14.7132 3.36595L11.4825 6.59672C11.2228 6.85639 11.0769 7.20857 11.0769 7.57579V9.96267C11.0769 10.3299 11.2228 10.6821 11.4825 10.9417L14.8484 14.3077Z" fill="#00A0F5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.38461C0 0.619912 0.619915 0 1.38462 0H7.84616C8.61086 0 9.23077 0.619914 9.23077 1.38462V22.6154C9.23077 23.3801 8.61086 24 7.84615 24H1.38461C0.619912 24 0 23.3801 0 22.6154V1.38461ZM1.84615 1.84615V22.1538H7.38462V1.84615H1.84615Z" fill="#00A0F5"></path><path d="M6 19.3846C6 20.1493 5.38009 20.7692 4.61538 20.7692C3.85068 20.7692 3.23077 20.1493 3.23077 19.3846C3.23077 18.6199 3.85068 18 4.61538 18C5.38009 18 6 18.6199 6 19.3846Z" fill="#00A0F5"></path></svg>
</span>
<span>
    <p className='text-2xl font-semibold'>Set your brand up for social media success
</p>
</span>
</div>       
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
