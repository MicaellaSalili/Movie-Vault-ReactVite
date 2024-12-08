// src/Profile.jsx
import React, { useState } from 'react';

function Profile() {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Movie enthusiast and director in the making.',
  });
  const [profilePic, setProfilePic] = useState('/default-profile-icon.png'); // Default profile picture

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here (e.g., update the backend)
    console.log('Profile updated:', formData);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-24">
      <h2 className="text-3xl font-bold mb-8">Profile</h2>
      <div className="flex items-center space-x-8 mb-8">
        <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full shadow-md" />
        <div>
          <label
            htmlFor="profile-pic-upload"
            className="cursor-pointer bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Change Profile Picture
          </label>
          <input
            id="profile-pic-upload"
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
            className="hidden"
          />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows="4"
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <button type="submit" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Profile;
