import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Header from './Header'

const Browse = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)

  useEffect(() => {
    // if user is not signedIn, (ie userSlice is empty in redux Store) redirect to '/'
    if (!user) {
      navigate('/')
    }
  }, [])
  

  return (
    <div>
      <div className="flex justify-center pt-2">
        <Header/>
      </div>
      Browse
    </div>
  )
}

export default Browse