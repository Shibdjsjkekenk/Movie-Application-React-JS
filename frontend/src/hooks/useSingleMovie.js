import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getcredits, getsingleMovieDetail } from '../redux/movieSlice';
import { Movie_Credits, options, Single_Movie_Detail } from '../utils/constant';
import axios from 'axios';

const useSingleMovie = (movieId) => { // Accept movieId as an argument
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchSingleMovie = async () => {
            try {
             
                const url = Single_Movie_Detail(movieId);
                const res = await axios.get(url, options);
                dispatch(getsingleMovieDetail(res.data)); 
                // console.log(res.data); 


                // Fetch movie credits
                const creditsUrl = Movie_Credits(movieId);
                const resCredits = await axios.get(creditsUrl, options);
                dispatch(getcredits(resCredits.data));
                // console.log(resCredits.data); 
            } catch (error) {
                console.error(error);
            }
        };




        if (movieId) { // Only fetch if movieId is available
            fetchSingleMovie();
        }
    }, [dispatch, movieId]); // 
};

export default useSingleMovie;
