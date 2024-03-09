# Netflix GPT

## Key Steps

- Create React App
- Configured Tailwind
- Basic Routing
- Header
- Sign In / Sign Up Form
- Form Validation
- Firebase Setup
- Hosting the App : [https://netflix-gpt-24c07.web.app/](https://https://netflix-gpt-24c07.web.app/)
- Implemented basic form validations with corresponding error message
- Implemented SignUp / SignIn APIs using Firebase Authentication
- Created a redux Store and a userSlice to save user Data
- Added UserName into Firebase (updateProfile) and redux store along with username and password
- Make UserName visile on Header
- Implemented Signout
- Implemented Routing to not access /browse without Logging In
- Similarly re-direct to /browse if already logged in
- unSubscribe to onAuthStateChanged every time Header Component is unMounted
- Added Constants for HardCoded vlues
- Request new API Key from TMDB
- Fetch from TMDB movies
- Created a moviesSlice to save movies Data
- Custom Hook for getting now playing movies data and update in store
- Custom Hook for getting movie trailer video data (YT key) and update in store
- Embed YT video based on the video key in the URL and make it autoplay and mute
- Built Secondary Component in Browse
- Built Movie List with corresponding Movie Cards with their images from TMDB
- Created more custom hooks for usePopular, useTopRated, useUpComing Movies Lists
- Added GPT Search Page
- Added GPT Seach Box
- Added Multi-Language support (Only in Search Box for now)
- Fetch Movie Suggestions String from GPT APIs
- Using each movie in that string, search all relevant movies from TMDB search API
- Displayed the movie cards in the search page
- Added the Envt Variables for OPEN_AI and TMDB API keys
- Added Memoization to prevent multiple calls for each page change for fetching
  - Trailer Key / NowPlaying / Popular / TopRated / UpComing data in movie slice
-

## Key Features

- Login / Sign Up
  - Sign in / Sign Up Form
  - Redirect to Browse Page once Logged in
- Browser Page (After Authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title and Description
    - Movie Suggestions
      - Movie Lists * n
- Netflix GPT
  - Search Bar
  - Movie Suggestions
