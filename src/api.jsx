const API_URL = 'http://mrs-rp1.local/wp-json/wp/v2/posts';

export const fetchPosts = async () => {
  const response = await fetch(`$http://mrs-rp1.local/wp-json/wp/v2/posts`);
  const data = await response.json();
  return data;
};

export const fetchAnnouncements = async () => {
  const response = await fetch(`${API_URL}/announcements`);
  const data = await response.json();
  return data;
};

// Add more API functions as needed
