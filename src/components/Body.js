import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";

import Login from './Login'
import Browse from './Browse'
import { auth } from '../utils/firebase'
import {addUser, removeUser} from '../utils/userSlice'

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/browse',
        element: <Browse />
    }
  ])

  useEffect(() => { 
    // every time auth object is changed, this is called.
    // this is called every time user is signedIn, signedOut
    // defining it in useEffect to only call it once for every authStateChange
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user
        dispatch(addUser({uid, email, displayName}))
      } else {
        // User is signed out
        dispatch(removeUser())
      }
    });
  }, [])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body