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
  
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(
    'posts',
    fetchPosts,
    {
      cacheTime: 1000 * 60 * 5, 
      staleTime: 1000 * 60 * 1, 
      refetchOnWindowFocus: true, 
      keepPreviousData: true, 
    }
  );

  if (isLoading) return <div>Loading...</div>; 
  if (isError) return <div>Error: {error.message}</div>; 

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()} disabled={isFetching}>Refetch Data</button> {/* Button to manually refetch data */}
      <ul>
        {data && data.length > 0 ? ( 
          data.map(post => (
            <li key={post.id}>{post.title}</li> 
          ))
        ) : (
          <li>No posts available</li> 
        )}
      </ul>
    </div>
  );
};

export default PostsComponent;
