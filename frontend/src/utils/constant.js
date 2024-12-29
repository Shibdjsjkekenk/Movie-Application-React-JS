export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjUwYzg0YmVhZDE4ZTMwNWJkMTM3YTVhMDRhMmIxNyIsIm5iZiI6MTczNTI2OTM2NS4zNjA5OTk4LCJzdWIiOiI2NzZlMWJmNTYyYmEzMTBmYzAxMmMwODMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Vf2TDE5KCSWP_5sDO_viDc5oQcUsbBs4lGVoIySX7lg'
    }
};

export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";
export const Single_Movie_Detail = (movieId) =>`https://api.themoviedb.org/3/movie/${movieId}`;
export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query=";
export const Movie_Credits = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}/credits`;
export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";