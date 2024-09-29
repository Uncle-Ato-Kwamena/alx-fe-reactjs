import axios from 'axios';

export const fetchUserData = async (username, location = '', minRepos = '') => {
  try {
    const query = `${username}${location ? `+location:${location}` : ''}${minRepos ? `+repos:${minRepos}` : ''}`;
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);

    return response.data.items; 
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; 
  }
};
