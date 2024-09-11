import React, { useEffect, useState } from "react";
import "./App.css";
import JokesList from "./components/JokesList";
const DUMMY_JOKES = [
  {
    id: "1",
    text: 'I was struggling to figure out how lightning works, but then it struck me.',
  },
  {
    id: "2",
    text: "My parents raised me as an only child, which really annoyed my younger brother.",
  },
  {
    id: "3",
    text: "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
  },
  {
    id: "4",
    text: 'Today, my son asked "Can I have a book mark?" and I burst into tears.\n11 years old and he still doesn\'t know my name is Brian.',
  },
  {
    id: "5",
    text: "The six stages of debugging:\n1. That can't happen.\n2. Thatdoesn't happen on my machine.\n3. That shouldn't happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?",
  },
];
function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJokes() {
      setLoading(true);
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=5"
      );
      const data = await response.json();
      if (!data.error) {
        const jokesArray = data.jokes;
        const filteredJokesArray = jokesArray.map((jokeObject) => ({
          id: jokeObject.id,
          text: jokeObject.joke,
        }));
        setJokes(filteredJokesArray);
      } else {
        alert("Error: " + data.error);
      }
      setLoading(false);
    }
    fetchJokes();
  }, []);
  return (
    <div className="appWrapper">
      <h1>My Jokes</h1>
      {loading && <p style={{ marginTop: "2rem" }}>Loading...</p>}
      {!loading && <JokesList jokes={jokes} />}
    </div>
  );
}
export default App;
