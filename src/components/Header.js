import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import React, { useState } from 'react'

import { auth } from '../utils/firebase'
import { signOut } from "firebase/auth"

const Header = () => {
  const navigate = useNavigate()
  // get userSlice data
  const user = useSelector((store) => store.user)
  const [userData, setUserData] = useState(user)
  
  // signOut Logic
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      setUserData(null)
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });    
  }

  return (
    <div className='w-full h-fit flex justify-between '>
      <div id="logoSection" className='w-2/12'>
        <img 
          className='w-44'
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
          alt="logo" />
      </div>

      { // only displayed when user doc is present ie in browse page (not in signIn page)
        user && userData &&
        <div id="headersSection" className='flex justify-end bg-blue-400  w-6/12 pr-8'>
          <img
            className='w-12 self-center mr-4'
            src="https://occ-0-3215-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" 
            alt="userLogo" />
            <p className="text-black mr-4 self-center">{user?.displayName}</p>
          <button onClick={handleSignOut} className="font-bold text-black">Sign Out</button>
        </div>
      }
      
    </div>
  )
}

export default Header