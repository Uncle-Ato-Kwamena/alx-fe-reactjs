import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Using React Query's useQuery to fetch posts
  const { data, error, isLoading, refetch } = useQuery('posts', fetchPosts);

  if (isLoading) return <div>Loading...</div>; // Show loading message while data is being fetched
  if (error) return <div>Error: {error.message}</div>; // Show error message if fetching fails

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch Data</button> {/* Button to manually refetch data */}
      <ul>
        {data && data.length > 0 ? ( // Check if data exists and has content
          data.map(post => (
            <li key={post.id}>{post.title}</li> // Display each post title
          ))
        ) : (
          <li>No posts available</li> // Message if no posts are available
        )}
      </ul>
    </div>
  );
};

export default PostsComponent;
