import React from 'react'
import { useSelector } from 'react-redux'
import { langData } from '../utils/languageConstants'

const GptSearchBox = () => {
  const userLang = useSelector(state => state.config.userPreferredLanguage)
  return (
    <div className='flex justify-center w-full'>
      <form className='w-2/3 flex justify-center'>
        <input 
        className='p-4 w-9/12 rounded-l-lg'
        type="text"
        placeholder={langData[userLang].gptSearchPlaceHolder}
        />
        <button className='p-4 w-2/12 bg-red-500 text-white rounded-r-lg'>{langData[userLang].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBox