import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'

import { auth } from '../utils/firebase'
import { onAuthStateChanged, signOut } from "firebase/auth"
import { addUser, removeUser } from '../utils/userSlice'
import { HEADER_COMPANY_LOGO, HEADER_USER_LOGO } from '../utils/constants'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // get userSlice data
  const user = useSelector((store) => store.user)

  useEffect(() => { 
    // onAuthStateChanged is like an eventListener, called every time user is signedIn, signedOut
    // defining it in useEffect to only call it once for every authStateChange
    // unSubsribe helps in removing this (similar to eventListener) when the Header Component is unMounted.
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user
        dispatch(addUser({uid, email, displayName}))
        navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')
      }
    });

    // this returned method is a callback function, which will be called when the component unMounts
    // in this case used to stop onAuthStateChanged method from tracking auth state changes, when Header is unmounted.
    return () => unSubscribe()
  }, [])
  
  // signOut Logic
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });    
  }

  return (
    <div className='w-full h-fit flex justify-between '>
      <div id="logoSection" className='w-2/12'>
        <img 
          className='w-44'
          src={ HEADER_COMPANY_LOGO } 
          alt="logo" />
      </div>

      { // only displayed when user doc is present ie in browse page (not in signIn page)
        user &&
        <div id="headersSection" className='flex justify-end  text-white w-6/12 pr-8'>
          <img
            className='w-12 self-center mr-4'
            src={ HEADER_USER_LOGO } 
            alt="userLogo" />
            <p className="mr-4 self-center">{user?.displayName}</p>
          <button onClick={handleSignOut} className="font-bold">Sign Out</button>
        </div>
      }
      
    </div>
  )
}

export default Header