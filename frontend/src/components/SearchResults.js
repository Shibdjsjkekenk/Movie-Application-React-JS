import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { TMDB_IMG_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import searchImg from "../assets/movie-pic.jpeg";

const SearchResults = () => {
    const movies = useSelector((state) => state.searchMovies.searchResults || []);

    return (
        <>
            <Navbar />


            <section className="">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {movies.length > 0 ? (
                            movies.map((movie) => (
                                <div key={movie.id} className="movie-card">
                                    <Link to={`/single/${movie.id}`} className="block">
                                        <img
                                            src={
                                                movie.poster_path ? `${TMDB_IMG_URL}${movie.poster_path}` : searchImg
                                            }
                                            alt={movie.title}
                                            className="w-full h-[300px] object-cover"
                                        />
                                        <h6 className="text-center text-sm pt-2 text-white">
                                            {movie.title}
                                        </h6>
                                        <p className="text-center pt-1 pb-4 text-white">
                                            Rating: {movie.vote_average || 'N/A'}
                                        </p>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="text-white text-center col-span-full">
                                No movies found. Please try searching for another movie.
                            </p>
                        )}
                    </div>

                </div>
            </section >
        </>
    );
};

export default SearchResults;
