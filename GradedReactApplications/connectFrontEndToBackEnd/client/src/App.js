import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/data');
        const jsonData = await response.json();
        setData(jsonData.message);
      } catch (error) {
        console.error('There was an error!', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;