import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const location  = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/";

  // data load from context 

  const {googleSignIn,facebookProvider, setUser,logIn,setLoading,forgotPassword} = useContext(AuthContext)

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your login logic here
    const form = e.target;

    logIn(email, password)
    .then(result => {
      const user = result.user;
      
        form.reset()
        navigate(from, { replace: true });
     
    
      console.log(user);
    })
    .catch(error => {
      setError(error.message)
    })
    .finally(() => {
      setLoading(false)
    })
  };


  const handleForgotPassword = () => {
    if(!email) {
      alert("Please enter your email")
    }
    forgotPassword(email)
    .then(() => {
      alert("password reset email sent")
    })
    .catch(error => {
      setError(error.message)
    })
    return
  }


  const handleGoogleLogin = () => {
    googleSignIn()
    .then(result => {
      const user = result.user;
      setUser(user)
      navigate(from, { replace: true });
      
      console.log(user);
    })
    .catch(error => {
      setError(error.message);
    })
  }

  return (
    <div className=" max-w-lg mx-auto">
      <div className=" ">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-6 pt-4 pb-8 mb-4">
          <h1 className="text-2xl font-bold text-center mb-8">Login</h1>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold text-sm mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow- text-xs"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <p className="text-red-500 font-xs">{error}</p>

          <div className="">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
              type="submit"
            >
              Log In
            </button>

            <div className="my-4">
              <p
               className="text-gray-700 font-bold text-sm text-center">Or login with:</p>

              <div className="flex mt-2 flex-col gap-1">
                <button
                  className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-sm"
                  type="button"
                  onClick={() => {
                    // Handle Facebook login here
                    
                  }}
                >
                  Facebook
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm max-w-full"
                  type="button"
                  onClick={handleGoogleLogin}
                >
                  Google
                </button>
              </div>
            </div>
            <div className="flex justify-between"> 
            <button
            onClick={handleForgotPassword}
              className="inline-block align-baseline  text-xs text-blue-500 hover:text-blue-800"
              
            >
              Forgot Password?
            </button>
            <p className="text-xs text-gray-700
            ">Don't have an account? <Link className="inline-block align-baseline  text-xs text-blue-500 hover:text-blue-800" to='/register'>Register</Link></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
