import Lottie from 'react-lottie';
import animation from '../../../assets/animation.json';

import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../../providers/AuthProvider';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const {signInUser, googleLogin} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const from = location.state?.from?.pathname || "/";

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      const handleSignin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const formData = {email, password}

        if(!/(?=.*[A-Z])/.test(password)){
          setError('Please provide at least one Uppercase letter')
          return;
      }
      else if(!/(?=.*[0-9])/.test(password)){
          setError('Please provide at least one number')
          return;
      }
      else if (password.length < 6){
          setError('Please provide at least 6 characters')
          return;
      }

        console.log(formData);
        
       
        signInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Login successfull',
              showConfirmButton: false,
              timer: 1500
            })
            setError('')
            navigate(from, { replace: true });
            console.log(loggedUser);
             form.reset();
          
            
          })
          .catch(error => {
            console.log(error);
            // setError(error.message)
          })

    }


    const handleGoogleSingIn = () => {
      
      googleLogin()
      .then(()=> {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Login successfull',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(from, { replace: true } );
        
      })
      .catch(error => {
          console.log(error);
      })
  }


    return (
        <div className='bg-gradient-to-r from-cyan-300 to-blue-300 lg:h-[800px]'>
          
<div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-3 py-20 '>
   
   {/* left section */}
    <div className='login-container mx-auto w-full md:w-[407px]'>
    <h2 className='text-3xl md:text-5xl text-black font-semibold pb-5'>Login Here </h2>
        <form onSubmit = {handleSignin}>
        <div>
        <input type="email" name='email' placeholder="Email" className="w-full input input-bordered" />
        </div>
      
        <div>
        <input type="password" name='password' placeholder="Password" className="w-full input input-bordered" />
        <p className="text-red-600 text-xs">{error}</p>
        </div>
        <div className="form-control mt-6">
        <input type="submit" className='w-full bg-gradient-to-r from-cyan-500 to-blue-500' value="Login" />
         
        </div>
        </form>
        <p className='p-3'><small>New here? <Link to='/register' className='text-orange-500'>Register</Link> </small></p>
        <div className=' rounded '>
            {/* TODO: social login component will be here */}
        <button  onClick={handleGoogleSingIn} className='w-full flex justify-center items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-center p-2 rounded text-white'> 
        <FaGoogle/> <span className=''> Google</span> 
         </button>
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

export default Login;


