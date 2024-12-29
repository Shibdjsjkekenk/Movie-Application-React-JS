import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import MovieBig from '../assets/moviebig.jpg';
import MovieSmall from '../assets/movie-pic.jpeg';
import useSingleMovie from '../hooks/useSingleMovie';
import { TMDB_IMG_URL } from '../utils/constant';
import { useSelector } from 'react-redux'; // To access movie data from Redux store

const SingleMovie = () => {
    const { id } = useParams(); // Get the movie ID from the URL
    const movieData = useSelector(state => state.movie.singleMovieDetail); // Access the single movie data from Redux store
    const credits = useSelector(state => state.movie.credits); // Access credits data from Redux store

    useSingleMovie(id); // Pass the movieId to the custom hook

    // Handle loading state for both movie data and credits
    if (!movieData || !credits) {
        return <div>Loading...</div>;  // Add a loading message or spinner
    }

    return (
        <>
            <Navbar />
            <section>
                <div className="mx-auto max-w-sm sm:max-w-sm md:max-w-md lg:max-w-[1211px]">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 bg-black p-5 rounded-lg">
                        {/* Left Section */}
                        <div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <img
                                    src={movieData.poster_path ? `${TMDB_IMG_URL}${movieData.poster_path}` : '/fallback-image.jpg'}
                                    alt={movieData.title}
                                    className="w-full sm:w-40 h-[200px] rounded-lg"
                                />
                                <div className="sm:ml-4 mt-4 sm:mt-0">
                                    <h2 className="font-bold text-[26px] pt-2 text-white">{movieData.title}</h2>
                                    <p className="pt-2 text-white">
                                        Rating: {movieData.vote_average ? movieData.vote_average.toFixed(1) : 'N/A'}
                                    </p>
                                    <p className="pt-2 text-white">
                                        Runtime: {movieData.runtime ? movieData.runtime : 'N/A'} min
                                    </p>
                                    <p className="pt-2 text-white">
                                        Release Date: {movieData.release_date || 'N/A'}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4">
                                <h2 className="font-bold text-[26px] pt-2 text-white">Overview</h2>
                                <p className="pt-2 text-white">{movieData.overview || 'No overview available.'}</p>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div>
                            <img
                                src={movieData.backdrop_path ? `${TMDB_IMG_URL}${movieData.backdrop_path}` : '/fallback-image.jpg'}
                                alt=''
                                className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>


            <div className='px-8'>
                <h1 className="text-white text-3xl py-3 ">Cast</h1>
                <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
                    {credits.cast && credits.cast.map((castMember) => (
                        <div className="flex items-center pr-4" key={castMember.id}>
                            <div className="w-52">
                                <img
                                    src={castMember.profile_path ? `${TMDB_IMG_URL}${castMember.profile_path}` : MovieSmall}
                                    alt={castMember.name}
                                    className="w-full h-[200px] object-cover rounded-lg"
                                />
                                <h6 className="text-white pt-2">{castMember.name}</h6>
                                <p className="text-white">Character: {castMember.character || 'N/A'}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SingleMovie;
