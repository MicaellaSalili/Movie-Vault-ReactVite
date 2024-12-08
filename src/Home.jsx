// Home.jsx
import React, { useState, useEffect } from 'react';
import { useMovieContext } from './MovieContext';

function Home() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    releaseDate: '',
    poster: '',
    review: '',
    rating: '',
  });
  const [isAddingNew, setIsAddingNew] = useState(true);
  const { toWatchList, setToWatchList, addMovieToToWatch, addMovieReview } = useMovieContext();
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://yourwordpresssite.com/wp-json/wp/v2/movies');
        const data = await response.json();

        const movies = data.map((movie) => ({
          title: movie.acf.movie_title,
          description: movie.acf.description,
          releaseDate: movie.acf.release_date,
          poster: movie.acf.poster,
          review: movie.acf.review,
          rating: movie.acf.rating,
        }));

        setToWatchList(movies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [setToWatchList]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleAddNewMovie = () => {
    if (newMovie.title && newMovie.description && newMovie.releaseDate && newMovie.rating) {
      addMovieToToWatch(newMovie);
      setNewMovie({
        title: '',
        description: '',
        releaseDate: '',
        poster: '',
        review: '',
        rating: '',
      });
      setIsAddingNew(true);
    }
  };

  const handleReviewMovie = () => {
    if (newMovie.title && newMovie.review && newMovie.rating) {
      addMovieReview({
        title: newMovie.title,
        description: newMovie.description, // Add description
        poster: newMovie.poster, // Add poster
        review: newMovie.review,
        rating: newMovie.rating,
      });

      const updatedWatchList = toWatchList.filter(movie => movie.title !== newMovie.title);
      setToWatchList(updatedWatchList);

      setNewMovie({
        title: '',
        description: '',
        releaseDate: '',
        poster: '',
        review: '',
        rating: '',
      });

      setSaveMessage('Review submitted successfully!');
      setTimeout(() => setSaveMessage(''), 3000); // Clear the message after 3 seconds

      setIsAddingNew(true);
    } else {
      setSaveMessage('Please fill in all required fields.');
      setTimeout(() => setSaveMessage(''), 3000);
    }
  };

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    setNewMovie({
      title: movie.title,
      description: movie.description,
      releaseDate: movie.releaseDate,
      poster: movie.poster,
      review: movie.review || '',
      rating: movie.rating,
    });
    setIsAddingNew(true);
  };

  return (
    <div className="p-6 bg-gray-50 shadow-lg rounded-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-4xl font-bold mb-6 text-center">Home</h2>

      <div className="flex justify-center mb-8">
        <button
          onClick={() => setIsAddingNew(true)}
          className={`px-6 py-3 ${isAddingNew ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300`}
        >
          Add New Movie
        </button>
        <button
          onClick={() => setIsAddingNew(false)}
          className={`ml-4 px-6 py-3 ${!isAddingNew ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300`}
        >
          Your Watchlist
        </button>
      </div>

      {isAddingNew ? (
        <div className="bg-white p-6 shadow-md rounded-lg max-w-md mx-auto">
          <input
            type="text"
            name="title"
            value={newMovie.title}
            onChange={handleInputChange}
            placeholder="Movie Title"
            className="p-3 border border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="description"
            value={newMovie.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="p-3 border border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          />
          <input
            type="date"
            name="releaseDate"
            value={newMovie.releaseDate}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="poster"
            value={newMovie.poster}
            onChange={handleInputChange}
            placeholder="Poster URL"
            className="p-3 border border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="review"
            value={newMovie.review}
            onChange={handleInputChange}
            placeholder="Your Review"
            className="p-3 border border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          />
          <input
            type="number"
            name="rating"
            value={newMovie.rating}
            onChange={handleInputChange}
            placeholder="Rating (1-5)"
            className="p-3 border border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1"
            max="5"
          />
          <button
            onClick={handleAddNewMovie}
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Add to Watchlist
          </button>
          <button
            onClick={handleReviewMovie}
            className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 mt-4"
          >
            Submit Review
          </button>
          {saveMessage && <p className="text-center text-green-600 mt-4">{saveMessage}</p>}
        </div>
      ) : (
        <div className="bg-white p-6 shadow-md rounded-lg max-w-md mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Select a Movie to Review</h3>
          <div className="grid grid-cols-1 gap-4">
            {toWatchList.length === 0 ? (
              <p className="text-lg text-gray-700 text-center">No movies in your to-watch list.</p>
            ) : (
              toWatchList.map((movie, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectMovie(movie)}
                  className={`p-4 border rounded-lg cursor-pointer hover:bg-blue-50 transition-colors duration-300 ${selectedMovie === movie ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
                >
                  <h4 className="text-xl font-semibold">{movie.title}</h4>
                  <p className="text-sm text-gray-600">{movie.description}</p>
                  <p className="text-sm text-gray-600">Release Date: {movie.releaseDate}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

