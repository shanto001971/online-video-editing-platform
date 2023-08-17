import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

import Swal from "sweetalert2";
 

const SocialLogin = () => {

    const {googleLogin, githubLogin, facebookLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    

    
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

    const handleGithubLogin = () => {
        githubLogin()
        .then(() => {
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


    const handleFacebookSingIn = () => {
        facebookLogin()
        .then(() => {
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
        <div>
      <div className="divider"></div>
      <div className="flex justify-around">
        <button onClick={handleGoogleSingIn} className="btn btn-circle btn-outline ">
          <span className="text-2xl"><FcGoogle /></span>
        </button>
        <button onClick={handleGithubLogin} className="btn btn-circle btn-outline ">
          <span className="text-2xl text-slate-500"><FaGithub /></span>
        </button>
        <button onClick={handleFacebookSingIn} className="btn btn-circle btn-outline ">
          <span className="text-2xl text-blue-700"><FaFacebook /></span>
        </button>
      </div>
    </div>
    );
};

export default SocialLogin;