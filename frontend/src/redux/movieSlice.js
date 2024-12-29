import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        popularMovie:null,
        topRatedMovies:null,
        upcomingMovies:null,
        singleMovieDetail:null,
        credits: null,
    },
    reducers:{
        // actions
        getPopularMovie:(state,action)=>{
            state.popularMovie = action.payload;
        },
        getTopRatedMovie:(state,action)=>{
            state.topRatedMovies = action.payload;
        },
        getUpcomingMovie:(state,action)=>{
            state.upcomingMovies = action.payload;
        },
  
         getsingleMovieDetail:(state,action)=>{
            state.singleMovieDetail = action.payload;
        },
        getcredits:(state,action)=>{
            state.credits = action.payload;
        },
    }
});
export const {getPopularMovie,getTopRatedMovie,getUpcomingMovie, getsingleMovieDetail, getcredits} = movieSlice.actions;
export default movieSlice.reducer;