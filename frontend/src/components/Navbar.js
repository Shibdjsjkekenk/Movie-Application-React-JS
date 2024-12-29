import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSearchMovies from "../hooks/useSearchMovies";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { query, setQuery, searchMovies } = useSearchMovies(navigate);  // Correctly destructuring the function

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchMovies) {  // Checking if searchMovies function exists before calling
      searchMovies();
    } else {
      console.log("searchMovies function not available");
    }
  };

  return (
    <nav className="bg-[#454B5A] shadow mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-white">
              MovieDB
            </a>
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-white font-bold hover:text-red-600">
              Popular Movie
            </a>
            <a href="/toprated" className="text-white font-bold hover:text-red-600">
              TopRated Movie
            </a>
            <a href="/upcoming" className="text-white font-bold hover:text-red-600">
              Upcoming Movie
            </a>
          </div>

          <div className="flex">
            <div className=" md:block w-full max-w-md mx-4 flex justify-end">
              <form className="flex w-[109%]" onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Movie Name..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#6D7378] text-white rounded-r-md hover:bg-blue-700 focus:outline-none"
                >
                  Search
                </button>
              </form>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <a href="/" className="block px-4 py-2 text-white font-bold hover:bg-gray-200">
            Popular Movie
          </a>
          <a href="/toprated" className="block px-4 py-2 text-white font-bold hover:bg-gray-200">
            TopRated Movie
          </a>
          <a href="/upcoming" className="block px-4 py-2 text-white font-bold hover:bg-gray-200">
            Upcoming Movie
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
