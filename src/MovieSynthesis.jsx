// src/MovieSynthesisFiles.jsx
import React from 'react';

function MovieSynthesisFiles() {
  const files = [
    { name: 'Movie1_Synthesis.pdf', date: '2024-08-15' },
    { name: 'Movie2_Synthesis.docx', date: '2024-08-12' },
    // Add more files as needed
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Movie Synthesis Files</h2>
      <div className="space-y-4">
        {files.map((file, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">{file.name}</h3>
            <p className="text-gray-600">Date: {file.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSynthesisFiles;
