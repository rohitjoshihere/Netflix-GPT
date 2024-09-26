import React from 'react'
import { useSelector } from 'react-redux'
import useMovieVideos from '../hooks/useMovieVideos'

const MovieContainer = () => {
  const trailer = useSelector((store) => store.movies?.trailerVideo)
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  useMovieVideos();

  if (!movies) return;

  const mainMovie = movies[0];
  console.log(mainMovie)
  const { original_title, overview } = mainMovie
  return (
    <div className='aspect-screen'>
      <iframe
        className='w-screen aspect-screen'
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1`} // autoplay added
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
      </iframe>

      <div className="w-10/12 h-[80%] w-screen text-white">
        <h1 className='text-4xl font-bold'>{original_title}</h1>
        <p className='w-1/3 text-zinc-700'>{overview}</p>
      </div>
    </div>
  )
}

export default MovieContainer