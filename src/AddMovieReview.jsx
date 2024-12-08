// src/AddMovieReview.jsx
import React, { useState } from 'react';

function AddMovieReview() {
  const [movie, setMovie] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Movie:', movie);
    console.log('Review:', review);
    setMovie('');
    setReview('');
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Add a Movie Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="movie" className="block text-lg font-medium mb-1">Movie Title:</label>
          <input
            id="movie"
            type="text"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter movie title"
            required
          />
        </div>
        <div>
          <label htmlFor="review" className="block text-lg font-medium mb-1">Review:</label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Write your review"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}

export default AddMovieReview;
