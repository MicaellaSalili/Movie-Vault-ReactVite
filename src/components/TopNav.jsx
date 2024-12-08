// src/components/TopNav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TopNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="ml-64 h-20 bg-white shadow-lg fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-end h-full space-x-8 px-4">
        
        <Link to="/top10movies" className="text-lg font-semibold hover:text-blue-600">
          ↗️ Top 10 Movies
        </Link>
        <Link to="/favorites" className="text-lg font-semibold hover:text-blue-600">
          🩷 Favorites
        </Link>
        <Link to="/genres" className="text-lg font-semibold hover:text-blue-600">
          🎬 Genres
        </Link>
        <div className="relative">
          <button onClick={toggleDropdown} className="focus:outline-none flex items-center">

            <span className="text-lg font-semibold">👤 Profile</span>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
              <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                View Profile
              </Link>
              <Link to="/edit-profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                Edit Profile
              </Link>
              <Link to="/playlist" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                Playlist
              </Link>
              <Link to="/movie-synthesis" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                Movie Synthesis Files
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default TopNav;
