import { useEffect } from "react";
import axios from "axios";
import { getTopRatedMovie } from "../redux/movieSlice";
import { Top_Rated_Movie, options } from "../utils/constant";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const res = await axios.get(Top_Rated_Movie, options);
        dispatch(getTopRatedMovie(res.data.results));
        console.log(res.data.results);
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
      }
    };

    fetchTopRatedMovies();
  }, [dispatch]); 

};

export default useTopRatedMovies;
