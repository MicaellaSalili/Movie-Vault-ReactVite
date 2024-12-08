// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import MovieReviews from './MovieReviews';
import ToWatch from './ToWatch';
import Playlist from './Playlist';
import Top10Movies from './Top10Movies';
import Favorites from './Favorites';
import Genres from './Genres';
import EditProfile from './EditProfile'; // Import EditProfile component
import MovieSynthesisFiles from './MovieSynthesis'; // Import MovieSynthesisFiles component
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import Profile from './Profile';
import './components/global.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <TopNav />
        <div className="flex flex-1">
          <SideNav />
          <div className="flex-1 ml-64">
            <main className="p-6 mt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/moviereviews" element={<MovieReviews />} />
                <Route path="/towatch" element={<ToWatch />} />
                <Route path="/playlist" element={<Playlist />} />
                <Route path="/top10movies" element={<Top10Movies />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/genres" element={<Genres />} />
                <Route path="/profile" element={<Profile />} /> {/* Updated to use 'element' */}
                <Route path="/edit-profile" element={<EditProfile />} /> {/* Added EditProfile route */}
                <Route path="/movie-synthesis" element={<MovieSynthesisFiles />} /> {/* Added MovieSynthesisFiles route */}
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
