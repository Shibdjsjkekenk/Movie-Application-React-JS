import React from 'react'
import UpcomingMovieCard from './UpcomingMovieCard'
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const UpcomingMovie = () => {
  const movie = useSelector(store => store.movie);
  useUpcomingMovies()
  return (
    <>
      <Navbar />
      <section className=''>
        <div class=" mx-auto max-w-sm sm:max-w-sm md:max-w-md lg:max-w-[1211px] ">
          <UpcomingMovieCard movies={movie.upcomingMovies} />

        </div>
      </section>

    </>
  )
}

export default UpcomingMovie