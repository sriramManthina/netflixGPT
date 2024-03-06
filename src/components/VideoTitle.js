import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='px-[4%] py-[20vh] absolute text-white'>
      <h1 className='py-6 text-4xl font-bold'>{title}</h1>
      <p className='text-base w-5/12'>{overview}</p>
      <div className='py-4'>
        <button className='bg-white text-black py-2 px-8 text-base rounded-lg hover:bg-opacity-80'> Play </button>
        <button className='mx-2 bg-gray-500 text-white py-2 px-8 text-base bg-opacity-70 rounded-lg'> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle