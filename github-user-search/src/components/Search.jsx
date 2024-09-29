import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    
    try {
      // Fetch user data from GitHub API
      const data = await fetchUserData(username);
      if (data && data.length > 0) {
        setUserData(data);
      } else {
        setError(true);
      }
      setUsername(''); 
    } catch (err) {
      setError(true);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <form onSubmit={handleSubmit} className="bg-[#343a40] p-6 rounded-lg shadow-xl max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full p-2 mb-4 border border-[#495057] bg-[#212529] text-[#f8f9fa] rounded"
        />
        <button
          type="submit"
          className="bg-[#6c757d] hover:bg-[#5a6268] text-[#f8f9fa] font-bold py-2 px-4 rounded w-full"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4 text-[#f8f9fa]">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">Looks like we can't find the user.</p>}

      {userData && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div key={userData.id} className="bg-[#343a40] p-4 rounded-lg shadow-md">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="w-20 h-20 rounded-full mx-auto"
            />
            <h3 className="text-center mt-4 text-lg font-semibold text-[#f8f9fa]">{userData.login}</h3>
            <p className="text-center text-[#6c757d]">{userData.location || 'No location specified'}</p>
            <p className="text-center text-[#6c757d]">Repositories: {userData.public_repos ?? 'No repo info'}</p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-2 text-gray-100 bg-gray-500 p-4 rounded"
            >
              View Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
