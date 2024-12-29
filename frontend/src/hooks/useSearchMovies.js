import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  searchMoviesStart,
  searchMoviesSuccess,
  searchMoviesFailure,
} from "../redux/searchMoviesSlice";
import { SEARCH_MOVIE_URL, options } from "../utils/constant";

const useSearchMovies = (navigate) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  // Use useEffect to handle fetching search results when query changes
  useEffect(() => {
    const fetchSavedResults = () => {
      const savedResults = JSON.parse(localStorage.getItem("searchResults"));
      if (savedResults) {
        dispatch(searchMoviesSuccess(savedResults));
      }
    };

    // Fetch saved results on component
    fetchSavedResults();
  }, [dispatch]);

  const searchMovies = async () => {
    if (!query.trim()) return;

    dispatch(searchMoviesStart());

    try {
      const response = await fetch(`${SEARCH_MOVIE_URL}${query}`, options);
      const data = await response.json();
      if (response.ok) {
        dispatch(searchMoviesSuccess(data.results || []));
        
        // Save data to localStorage to page refreshes
        localStorage.setItem("searchResults", JSON.stringify(data.results || []));
        
        navigate("/search-results");
      } else {
        dispatch(searchMoviesFailure(data.status_message || "Error fetching movies"));
      }
    } catch (error) {
      dispatch(searchMoviesFailure(error.message || "Something went wrong"));
    }
  };

  return {
    query,
    setQuery,
    searchMovies,
  };
};

export default useSearchMovies;
