import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If you prefer axios, install it with `npm install axios`

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API
    axios.get('http://mrs-rp1.local/wp-json/wp/v2/posts') // Replace with your API URL
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this runs once after the initial render

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Data from API</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetcher;
