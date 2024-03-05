import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


import Header from './Header'
import { validateFormData } from '../utils/validateForm'
import { auth } from '../utils/firebase'
import {addUser} from '../utils/userSlice'


const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const userNameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleButtonClick = () => {
    const message = validateFormData(userNameRef?.current?.value, emailRef.current.value, passwordRef.current.value, isSignInForm)
    setErrorMessage(message)
    if (message) return

    // signIn / signUp Logic
    if(isSignInForm){ // Login Logic
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          const {uid, email, displayName} = auth.currentUser
          dispatch(addUser({uid, email, displayName}))
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === 'auth/invalid-credential')
            return setErrorMessage('Please re-check the Email and Password')
        });
    } else { // Sign Up Logic
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // add displayName into the user Profile and save it to auth.currentUser
          updateProfile(user, { 
            displayName: userNameRef.current.value
          }).then(() => {
            // Profile updated!
            // use auth.currentUser to update data in userSlice from reduxStore
            const {uid, email, displayName} = auth.currentUser
            dispatch(addUser({uid, email, displayName}))
            navigate('/browse')
          }).catch((error) => {
            setErrorMessage(error.message)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode)
          console.log(errorMessage)
          if (errorCode === 'auth/email-already-in-use') 
            return setErrorMessage('User already exists, please signIn')
        });
    }
  }

  const handleLinkClick = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg')",
        }}
      ></div>
      {/* Overlaying Gradient over the image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-black via-transparent"></div>

      {/* Overlaying Header over the image */}
      <div className="absolute inset-0 w-9/12 mx-auto flex justify-center pt-2">
        <Header/>
      </div>

      {/* Overlaying Form over the image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <form onSubmit={(e) => e.preventDefault()}
          className='w-3/12 flex flex-wrap justify-center rounded-md text-white bg-black bg-opacity-70'>
          <div className="w-9/12 py-12">
            <div className="w-full mb-8">
              <h1 className='font-semibold text-3xl'>
                {isSignInForm ? 'Sign In' : 'Sign Up'}
              </h1>
            </div>
            { !isSignInForm && (
            
            <div className="w-full mt-4">
            <input type="text" placeholder='Username' ref={userNameRef}
            className='px-4 py-3 w-full rounded-md bg-slate-800 text-slate-400'/>
            </div>
            
            )}
            <div className="w-full mt-4">
              <input type="text" placeholder='Email Address' ref={emailRef} 
              className='px-4 py-3 w-full rounded-md bg-slate-800 text-slate-400'/>
            </div>
            <div className="w-full mt-4">
              <input type="password" placeholder='Password' ref={passwordRef}
              className='px-4 py-3 w-full rounded-md bg-slate-800 text-slate-400'/>
            </div>
            <div className="w-full mt-4">
              <p className='text-red-600'>{errorMessage}</p>
            </div>
            <div className="w-full mt-8">
              <button type='submit' onClick={handleButtonClick} 
                className="py-3 w-full rounded-md bg-red-600">
                {isSignInForm ? 'Sign In' : 'Sign Up'}
              </button>
            </div>
            <div className="w-full mt-10">
              <p className='' onClick={handleLinkClick}>
                {isSignInForm ? 
                  'New to Netflix? Sign up now.' : 
                  'Already Registered? Sign in now'}
              </p>
            </div>
          </div>
        </form>
      </div>


    </div>
  )
}

export default Login