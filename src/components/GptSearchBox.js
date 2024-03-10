import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { langData } from '../utils/languageConstants'
import openai from '../utils/openai'
import { TMDB_API_OPTIONS } from '../utils/constants'
import { addGptMovies } from '../utils/gptSlice'

const GptSearchBox = () => {
  const userLang = useSelector(state => state.config.userPreferredLanguage)
  const dispatch = useDispatch()
  const searchBox = useRef(null)

  const fetchMovieFromTMDB = async (movieName) => {
    const fetchURL = 'https://api.themoviedb.org/3/search/movie?query=' + encodeURIComponent(movieName) + '&include_adult=false&language=en-US&page=1'
    const data = await fetch(fetchURL, TMDB_API_OPTIONS)
    const json = await data.json()
    // console.log(json)

    return json.results
  }

  const handleGptSearchBoxClick = async () => {
    // console.log(searchBox.current.value)

    const gptQuery = 'Act as a movie recommendation system. suggest some movies for the query : "'
     + searchBox.current.value + 
     '" only give me 5-10 names of the movies separated by comma, like the example result given ahead. ' + 
     'Example Result: Awe, Inside Out, Forrest Gump, Avengers, Dark Knight' 
    
    // console.log(gptQuery)
    
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    // if(!chatCompletion?.choices) // handle error
    
    // Shrek, Shrek 2, Shrek the Third, Shrek Forever After, The Adventures of Puss in Boots
    // console.log(chatCompletion?.choices?.[0]?.message?.content)

    const getMovies = chatCompletion?.choices?.[0]?.message?.content.split(',')
    // console.log(getMovies)
    const tmdbPromisesArray = getMovies.map(movie => fetchMovieFromTMDB(movie))
    const fetchedMovieResults = await Promise.all(tmdbPromisesArray)
    // console.log(fetchedMovieResults)
    const moviesToShow = []
    fetchedMovieResults.forEach(res => 
      moviesToShow.push(...res.filter(obj => obj?.backdrop_path))
    )
    // console.log(moviesToShow)
    dispatch(addGptMovies({
      movieNames: getMovies,
      movieResults: moviesToShow
    }))
  }

  return (
    <div className='flex justify-center w-full '>
      <form className='w-full md:w-2/3 flex flex-wrap justify-center p-4' onSubmit={(e) => e.preventDefault()}>
        <input 
        ref={searchBox}
        className='p-4 md:w-9/12 w-full rounded-md md:rounded-l-lg md:rounded-r-none mb-2 md:mb-0 text-black'
        type="text"
        placeholder={langData[userLang].gptSearchPlaceHolder}
        />
        <button className='p-4 md:w-2/12 w-full bg-red-500 text-white rounded-md md:rounded-r-lg md:rounded-l-none' onClick={handleGptSearchBoxClick}>{langData[userLang].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBox