import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer p-10 font-semibold sm:px-2 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-neutral text-neutral-content">
  <div className="">
   <img src={logo} alt="" width="80"   />
    <p className='text-base'>MotionMingle Express<br/>Providing reliable Service since 2000</p>
    <p>Free all-in-one video <br /> editor for everyone to create <br /> anything anywhere</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>

    );
};

export default Footer;