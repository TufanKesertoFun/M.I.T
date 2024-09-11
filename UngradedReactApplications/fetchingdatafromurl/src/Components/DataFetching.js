import React, { useState, useEffect } from 'react';
import '../DataFetching.css';

function DataFetching() {

  const [post, setPost] = useState({});

  const [id, setId] = useState(1);

  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const fetchData = async () => {

      setLoading(true);

      setError(null);

      try {

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }

    };
    fetchData();}
    ,
    [idFromButtonClick]
);

const handleClick = () => {
  setIdFromButtonClick(id);
};

return (
  <div className="container">
    <h1>Data Fetching Example</h1>
    <div>
      
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter Post ID"
        />
        
        <button type="button" onClick={handleClick} disabled={loading}>
          {loading ? 'Fetching...' : 'Fetch Post'}
        </button>
    </div>
    {error && <div className="error">Error: {error}</div>}

    {loading && <div className="loading">Loading...</div>}
    {post.title && (
      <div className="post">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    )
    }
  </div>
)
}

export default DataFetching;