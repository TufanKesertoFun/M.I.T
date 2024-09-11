import React, { useEffect, useState } from "react";
import NewsList from "./components/NewsList";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);
      const response = await fetch("https://newsapi.org/v2/everything?q=usa&apiKey=8b9e492495c845b5b15b1b3d0143c972&pageSize=25");

      const data = await response.json();
      if (data.status === "ok") {
        const filteredArticles = data.articles.map((article) => ({
          title: article.title,
          author: article.author,
          description: article.description,
          url: article.url,
        }));
        setArticles(filteredArticles);
      } else {
        alert("Error fetching articles");
      }
      setLoading(false);
    }
    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="appWrapper">
        <h1>Today's News</h1>
        <p style={{ marginTop: "2rem" }}>Loading...</p>
      </div>
    );
  }

  return (
    <div className="appWrapper">
      <h1>Today's News</h1>
      <NewsList pageNo={pageNo} pageSize={pageSize} articles={articles} />
      <div className="actions">
        <button
          onClick={() => setPageNo((prev) => prev -1)}
          disabled={pageNo === 1}
          >
            Previous
        </button>
        <button
          onClick={() => setPageNo((prev) => prev + 1)}
          disabled={pageNo === 5}
        >
          Next
        </button>

      </div>
    </div>
  )
}

export default App;