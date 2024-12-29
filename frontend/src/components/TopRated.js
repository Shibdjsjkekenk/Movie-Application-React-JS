import React from 'react'
import { useSelector } from 'react-redux';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import TopRatedCard from './TopRatedCard';
import Navbar from './Navbar';

const TopRated = () => {
  const movie = useSelector(store => store.movie);
  useTopRatedMovies();
  return (
    <>
    <Navbar/>
      <section className=''>
        <div class=" mx-auto max-w-sm sm:max-w-sm md:max-w-md lg:max-w-[1211px] ">
          <TopRatedCard movies={movie.topRatedMovies} />

        </div>
      </section>

    </>
  )
}

export default TopRated