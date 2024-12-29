import React from 'react';
import { TMDB_IMG_URL } from '../utils/constant';
import { Link } from 'react-router-dom';

const PopularMovieCard = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {
        movies?.map((movie) => (
          <div key={movie.id} className="movie-card">
          <Link to={`/single/${movie.id}`} className="block">
            <img
              src={`${TMDB_IMG_URL}${movie.poster_path}`} // Ensure you're using the correct property for poster path
              alt={movie.title}
              className="w-52"
            />
            <h6 className='text-center text-sm pt-2 text-white'>{movie.title}</h6>
            <p className='text-center pt-1 pb-4 text-white'>Rating: {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}</p>
          </Link>
        </div>
          
        ))
      }
    </div>
  );
};

export default PopularMovieCard;
