import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Profile = () => {
  const { user ,logOut} = useContext(AuthContext);

  const navigate = useNavigate()
 
  const handleLogOut =() => {
    logOut()
    .then(() => {
      navigate('/login')
    })
    .catch((error) => {
      console.error(error)
    })
  }

  return (
    <div className="max-w-xl mx-auto shadow-md border border-gray-300  px-6 ">
      <p className="text-center text-xl font-semibold my-6">
        {user?.email} <span className="pl-2">Profile</span>
      </p>

      <div className="flex mb-4 justify-between"> 
            <div>
                <img src={user?.photoURL} alt="" className="maz-w-full" />
            </div>
            <div>
                <p>Name: {user?.displayName}</p>
                <p>Email: {user?.email}</p>
                <p>Photo: {user?.photoURL}</p>
                <p>Phone NUmber: {user?.phoneNumber} </p>
                <p>Last Login : {user?.reloadUserInfo.lastLoginAt}</p>       
                {/* <p>Last Sign In Time: {user?.metadata.lastSignInTime}</p>      */}
            </div>
      </div>
      <div>
        <button onClick={handleLogOut}>LogOut</button>
      </div>
     
    </div>
  );
};

export default Profile;
