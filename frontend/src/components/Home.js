import React from 'react'
import PopularMovieCard from './PopularMovieCard'
import usePopularMovies from '../hooks/usePopularMovies'
import { useSelector } from 'react-redux';
import Navbar from './Navbar';

const Home = () => {
  const movie = useSelector(store => store.movie);
  usePopularMovies();
  return (
    <>
      <Navbar />
      <section className=''>
        <div class=" mx-auto max-w-sm sm:max-w-sm md:max-w-md lg:max-w-[1211px] ">
          <PopularMovieCard movies={movie.popularMovie} />

        </div>
      </section>

    </>
  )
}

export default Home