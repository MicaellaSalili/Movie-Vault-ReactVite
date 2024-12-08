import React, { useState } from 'react';
import { useMovieContext } from './MovieContext';

function ToWatch() {
  const [title, setTitle] = useState('');
  const { toWatchList, addMovieToToWatch } = useMovieContext();

  const handleAddMovie = () => {
    if (title.trim()) {
      console.log('Adding movie:', title); // Debugging line
      addMovieToToWatch({ title });
      setTitle('');
    }
  };

  return (
    <div className="p-6 bg-gray-50 shadow-lg rounded-lg max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Add a Movie to Watchlist</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Movie Title"
        className="p-3 border border-gray-300 rounded-lg w-full mb-4"
      />
      <button
        onClick={handleAddMovie}
        className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Add Movie
      </button>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Your Watchlist</h3>
        {toWatchList.length === 0 ? (
          <p className="text-gray-600">No movies added to your watchlist yet.</p>
        ) : (
          <ul className="list-disc list-inside">
            {toWatchList.map((movie, index) => (
              <li key={index} className="text-gray-800 mb-2">{movie.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ToWatch;
