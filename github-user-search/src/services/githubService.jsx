import axios from 'axios';

export const fetchUserData = async (username, location, minRepos) => {
  let query = '';
  if (username) query += `user:${encodeURIComponent(username)} `;

  // Fetch users based on username
  const response = await axios.get(`https://api.github.com/search/users?q=${query.trim()}`);
  
 
  return response.data;
};
