// src/Favorites.jsx
import React from 'react';

const favorites = [
  { title: 'The Godfather', year: 1972, poster: 'https://via.placeholder.com/150' },
  { title: 'Pulp Fiction', year: 1994, poster: 'https://via.placeholder.com/150' },
  { title: 'Forrest Gump', year: 1994, poster: 'https://via.placeholder.com/150' },
  { title: 'The Shawshank Redemption', year: 1994, poster: 'https://via.placeholder.com/150' },
  // Add more favorite movies here
];

function Favorites() {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Favorite Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((movie, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src={movie.poster} alt={movie.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
            <p className="text-gray-600">{movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
