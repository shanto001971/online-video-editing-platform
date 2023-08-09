import Lottie from 'react-lottie';
import animation from '../../../assets/animation.json';

import { Link } from 'react-router-dom';

const Register = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div className=' bg-gradient-to-r from-cyan-300 to-blue-300 '>
      
    <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-3 py-20'>
       
       
       {/* left section */}
        <div className='login-container mx-auto w-75'>
        <h2 className='text-3xl md:text-5xl text-black font-semibold pb-5'>Register Here</h2>

            <form >
            <div>
            <input type="text" name='name' placeholder="Name" className="w-full input input-bordered" />
            </div>
            <div>
            <input type="email" name='email' placeholder="Email" className="w-full input input-bordered" />
            </div>
            <div>
            <input type="file" name='image' placeholder="Image Upload" className="w-full input input-bordered" />
            </div>
            <div>
            <input type="password" name='password' placeholder="Password" className="w-full input input-bordered" />
            </div>
            <div>
            <input type="password" name='confirm-password' placeholder="Confirm Password" className="w-full input input-bordered" />
            </div>
            <div className="form-control mt-6">
            <input type="submit" className='w-full bg-gradient-to-r from-cyan-500 to-blue-500' value="Register" />
             
            </div>
            </form>
            <p className='p-3'><small>Already have an account? <Link to='/login' className='text-orange-500'>Login</Link> </small></p>
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded '>
                {/* TODO: social login component will be here */}
            <button className='w-full text-center p-2 text-white'> login with google</button>
            </div>
        </div>

         {/* right section */}
         <div>
        <Lottie options={defaultOptions}
          height={400}
          width={375}
         />
        </div>

        
    </div>
    </div>
    );
};

export default Register;