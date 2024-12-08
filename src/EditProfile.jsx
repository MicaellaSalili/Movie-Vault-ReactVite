// src/EditProfile.jsx
import React, { useState } from 'react';

function EditProfile() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    console.log('Profile updated:', formData);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label className="block text-sm font-medium" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full max-w-md border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 py-2 px-3"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="block text-sm font-medium" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full max-w-md border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 py-2 px-3"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="block text-sm font-medium" htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows="5"
            className="w-full max-w-md border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 py-2 px-3"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditProfile;

