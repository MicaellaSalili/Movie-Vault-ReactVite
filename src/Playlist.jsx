import React from 'react';
import { useMovieContext } from './MovieContext';

function Playlist() {
  const { toWatchList } = useMovieContext();

  return (
    <div className="p-6 bg-gray-50 shadow-lg rounded-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-4xl font-bold mb-6 text-center">Movie Playlist</h2>
      <div className="grid grid-cols-1 gap-4">
        {toWatchList.length === 0 ? (
          <p className="text-lg text-gray-700 text-center">No movies in your Playlist.</p>
        ) : (
          toWatchList.map((movie) => (
            <div
              key={movie.id} // Use unique identifier for key
              className="p-4 border rounded-lg bg-white shadow-md"
            >
              <h4 className="text-xl font-semibold">{movie.title}</h4>
              <p className="text-sm text-gray-600">{movie.description}</p>
              <p className="text-sm text-gray-600">Release Date: {movie.releaseDate}</p>
              {movie.poster && <img src={movie.poster} alt={movie.title} className="mt-2 max-h-40 object-contain" />}
              {movie.rating && (
                <p className="text-sm text-gray-600 mt-2">Rating: {movie.rating}/5</p>
              )}
              {movie.review && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Review:</h4>
                  <p className="text-sm text-gray-700">{movie.review}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Playlist;
