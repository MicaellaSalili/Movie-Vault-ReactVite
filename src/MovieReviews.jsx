import React from 'react';
import { useMovieContext } from './MovieContext';

function MovieReviews() {
  const { reviewedMovies } = useMovieContext();

  console.log('Reviewed Movies:', reviewedMovies); // Log reviewedMovies for debugging

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4">Movie Reviews</h2>
      {reviewedMovies.length === 0 ? (
        <p className="text-lg text-gray-700">No reviews available.</p>
      ) : (
        <ul className="space-y-4">
          {reviewedMovies.map((movie, index) => {
            console.log('Poster URL:', movie.poster); // Log each movie's poster URL
            return (
              <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={movie.poster}
                    className="w-24 h-36 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                    <p className="text-gray-600 mb-2">{movie.description}</p>
                    <p className="text-gray-600 mb-2">Release Date: {new Date(movie.releaseDate).toLocaleDateString()}</p>
                    <p className="text-gray-600 mb-2">Rating: {movie.rating}/5</p>
                  </div>
                </div>
                <p className="text-gray-700">{movie.review}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default MovieReviews;
