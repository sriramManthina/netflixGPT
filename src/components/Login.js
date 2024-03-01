import React, { useState } from 'react'

import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)

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
      <div className="absolute inset-0 flex justify-center pt-2">
        <Header/>
      </div>

      {/* Overlaying Form over the image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <form className='w-3/12 flex flex-wrap justify-center rounded-md text-white bg-black bg-opacity-70'>
          <div className="w-9/12 py-12">
            <div className="w-full mb-8">
              <h1 className='font-semibold text-3xl'>
                {isSignInForm ? 'Sign In' : 'Sign Up'}
              </h1>
            </div>
            { !isSignInForm && (
            
            <div className="w-full mt-4">
            <input type="text" placeholder='Username' 
            className='px-4 py-3 w-full rounded-md bg-slate-800 text-slate-400'/>
            </div>
            
            )}
            <div className="w-full mt-4">
              <input type="text" placeholder='Email Address' 
              className='px-4 py-3 w-full rounded-md bg-slate-800 text-slate-400'/>
            </div>
            <div className="w-full mt-4">
              <input type="text" placeholder='Password' 
              className='px-4 py-3 w-full rounded-md bg-slate-800 text-slate-400'/>
            </div>
            <div className="w-full mt-8">
              <button type='submit' 
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