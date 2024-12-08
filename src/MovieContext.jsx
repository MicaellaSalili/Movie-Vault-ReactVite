// MovieContext.jsx
import React, { createContext, useState, useContext } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [toWatchList, setToWatchList] = useState([]);
  const [reviewedMovies, setReviewedMovies] = useState([]);

  const addMovieToToWatch = (movie) => {
    setToWatchList([...toWatchList, movie]);
  };

  const addMovieReview = (review) => {
    setReviewedMovies((prevReviews) => [...prevReviews, review]);
    console.log('Updated Reviewed Movies:', reviewedMovies); // Log updated state
  };

  return (
    <MovieContext.Provider value={{ toWatchList, setToWatchList, reviewedMovies, addMovieToToWatch, addMovieReview }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
