// src/components/SideNav.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function SideNav() {
  return (
    <aside className="bg-custom-blue text-black w-64 h-screen fixed top-0 left-0 flex flex-col justify-center pt-10">
      <div className="p-4">
        <h2 className="text-3xl font-bold text-center mb-8">Director's Vault</h2>
      </div>
      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <Link to="/" className="block px-4 py-3 text-lg text-black hover:text-blue-400 hover:font-bold text-center font-helvetica">Home</Link>
          </li>
          <li>
            <Link to="/moviereviews" className="block px-4 py-3 text-lg text-black hover:text-blue-400 hover:font-bold text-center font-helvetica">Movie Reviews</Link>
          </li>
          <li>
            <Link to="/towatch" className="block px-4 py-3 text-lg text-black hover:text-blue-400 hover:font-bold text-center font-helvetica">To Watch</Link>
          </li>
          <li>
            <Link to="/playlist" className="block px-4 py-3 text-lg text-black hover:text-blue-400 hover:font-bold text-center font-helvetica">Playlist</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideNav;
