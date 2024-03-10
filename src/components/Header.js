import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'

import { auth } from '../utils/firebase'
import { onAuthStateChanged, signOut } from "firebase/auth"
import { addUser, removeUser } from '../utils/userSlice'
import { toggleShowGptSearch } from '../utils/gptSlice'
import { setUserPreferredLanguage } from '../utils/configSlice'
import { HEADER_COMPANY_LOGO, HEADER_USER_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // get userSlice data
  const user = useSelector((store) => store.user)
  // get gptSlice data
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)


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

  const handleGptSearch = () => {
    dispatch(toggleShowGptSearch())
  }

  const handleLanguageChange = (e) => {
    dispatch(setUserPreferredLanguage(e.target.value))
  }

  return (
    <div className='w-full h-fit flex justify-between flex-col md:flex-row md:pl-4'>
      <div id="logoSection" className='mx-auto md:m-0'>
        <img 
          className='w-24  md:w-44'
          src={ HEADER_COMPANY_LOGO } 
          alt="logo" />
      </div>

      { // only displayed when user doc is present ie in browse page (not in signIn page)
        user &&
        <div id="headersSection" className='flex justify-center md:justify-end text-white w-full md:w-8/12 pr-8'>
          {
            showGptSearch &&
            <select className='p-3 mr-4 max-h-fit rounded-lg self-center bg-gray-900 text-white'
              onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>
          }
          <button onClick={handleGptSearch} className="mr-4 px-2 py-2 max-h-fit self-center">
            {showGptSearch ? 'Home' : 'GPT-Search'}
          </button>
          {/* <img
            className='w-12 self-center mr-4'
            src={ HEADER_USER_LOGO } 
            alt="userLogo" /> */}
            {/* <p className="mr-4 self-center">{user?.displayName}</p> */}
          <button onClick={handleSignOut} >Sign Out</button>
        </div>
      }
      
    </div>
  )
}

export default Header