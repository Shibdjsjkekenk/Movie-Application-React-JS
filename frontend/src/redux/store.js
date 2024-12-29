import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import searchMoviesReducer from "./searchMoviesSlice"

const store = configureStore({
    reducer:{
        movie:movieReducer,
        searchMovies:searchMoviesReducer,
    }
});
export default store;