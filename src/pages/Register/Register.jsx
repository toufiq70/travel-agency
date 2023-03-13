import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [number, setNumber] = useState('');
  const [photoUrl, setPhotoUrl] = useState('')


  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  }

  const handlePhotoUrl =(e) => {
    setPhotoUrl(e.target.value);
  }
  
const {createUser, emailVerify, user, setUser, setLoading, updateUserProfile} =useContext(AuthContext)

const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your registration logic here

    const form = e.target;
    // Regex validate password
    if (!/(?=.*[A-Z])/.test(password)) {
      setError('Please provide at least one uppercase')
      return;
  }
  if (!/(?=.*[!@#$&*])/.test(password)) {
      setError('Please add at least one special character')
      return;
  }
  if (!/(?=.*[0-9])/.test(password)) {
      setError('Please provide at least one digit')
      return;
  }
  if (!/.{8}/.test(password)) {
      setError('Password should be at least 8 characters')
      return;
  }
  else {
      setError('');
  }
    createUser(email, password)
    .then(result => {
      const user = result.user;
      form.reset()
      handleUserProfileUpdate(firstName,photoUrl )
      // handleEmailVerification();
      // toast.success('email verification sent please check your email')
      navigate('/login')
      console.log(user);
    })
    .catch(error => {
      setError(error.message)
    })

    
    // handle user profile update
    const handleUserProfileUpdate = (firstName, photoUrl) => {
      const profile = { 
        displayName: firstName,
        photoURL: photoUrl
      }
      updateUserProfile(profile)
      .then(() => {})
      .catch(error => {
        setError(error.message)
      })
    }
  };

  // const handleEmailVerification =() => {
  //   emailVerify()
  //   .then( () => {})
  //   .catch(error => console.error(error))
  // }

  return (
    <div className="mx-auto max-w-lg">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-4 pb-4 mb-3"
      >
        <h1 className="text-2xl font-bold text-center mb-3">Register</h1>
        <p className="text-red-500 text-xs">{error}</p>
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
              htmlFor="first-name"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="first-name"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
              htmlFor="last-name"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="last-name"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
        </div>
        <div className="mb-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          {/* phone Number */}
          <div className="mb-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" htmlFor="password">
              Mobile Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="number"
              type="number"
              placeholder="mobile number"
              value={number}
              onChange={handleNumberChange}
            />
          </div>
          {/*    Photo Url*/}
          <div className="mb-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" htmlFor="password">
             Photo Url
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="photoUrl"
              type="text"
              placeholder="photoUrl"
              value={photoUrl}
              onChange={handlePhotoUrl}
            />
          </div>

          <div className="">
          <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
            <p className="text-sm">Already have an account <Link className="inline-block align-baseline  text-xs text-blue-500 hover:text-blue-800" to='/login'> Login</Link></p>
          </div>
      </form>
    </div>
  );
};

export default Register;
