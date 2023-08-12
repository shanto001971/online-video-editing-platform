import Lottie from 'react-lottie';
import animation from '../../../assets/animation.json';

import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';

const Register = () => {

const {createUser, updateUserProfile} = useContext(AuthContext);
const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photo)
      .then(() => {
        console.log("User Profile Updated");
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Register successfull',
          showConfirmButton: false,
          timer: 1500
        })
        reset()
        navigate("/")
      })
     
      
      
    })
    .catch(error => {
      console.error(error);
    })

    console.log(data)
  }


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

            <form onSubmit={handleSubmit(onSubmit)} >
            <div>
            <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="w-full input input-bordered" />
            {errors.name && <p className="text-red-600 text-xs">Name field is required</p>}
            </div>
            <div>
            <input type="email" {...register("email", { required: true })} {...register("email")}  name='email' placeholder="Email" className="w-full input input-bordered" />
            {errors.email && <p className="text-red-600 text-xs">Email field is required</p>}
            </div>
            <div>
            <input type="file" {...register("image", { required: true })} name='image' placeholder="Image Upload" className="w-full input input-bordered" />
            {errors.image && <p className="text-red-600 text-xs">Image field is required</p>}
            </div>
            <div>
            <input type="password" {...register("password", { 
             required: true,
             minLength:6,
             maxLength: 20, 
             pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6}/
           })}  name='password' placeholder="Password" className="w-full input input-bordered" />
             {errors.password && <p className="text-red-600 text-xs">Password at least 6 and not more than <br /> 20 characters</p>} 
           {errors.password && <p className="text-red-600 text-xs">Password should uppercase,<br />  lowercase and special characters</p>}
            </div>
            <div>
            <input type="password"  {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })} name='confirmPassword' placeholder="Confirm Password" className="w-full input input-bordered" />
            {errors.confirmPassword && (
            <p className="text-red-600 text-xs">{errors.confirmPassword.message}</p>
          )}
            </div>
            <div className="form-control mt-6">
            <input type="submit" className='w-full bg-gradient-to-r from-cyan-500 to-blue-500' value="Register" />
             
            </div>
            </form>
            <p className='p-3'><small>Already have an account? <Link to='/login' className='text-orange-500'>Login</Link> </small></p>
            <div className=' rounded '>
            {/* TODO: social login component will be here */}
        <button  className='w-full flex justify-center items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-center p-2 rounded text-white'> 
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

export default Register;