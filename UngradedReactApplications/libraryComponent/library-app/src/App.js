import React from "react";
import BookItem from "./BookItem";
const books = [
 {
 name: "The Midnight Library",
 author: "Matt Haig",
 publication: "Viking",
 rating: 4.3,
 description:
 "A novel about regrets, second chances, and the choices that shape our lives.",
 },
 {
 name: "The Great Gatsby",
 author: "F. Scott Fitzgerald",
 publication: "Scribner",
 rating: 4.0,
 description:
 "Set in the Roaring Twenties, this classic novel explores themes of wealth, love, and the American Dream.",
 },
 {
 name: "To Kill a Mockingbird",
 author: "Harper Lee",
 publication: "J. B. Lippincott & Co.",
 rating: 4.5,
 description:
 "A powerful story set in the racially charged atmosphere of the American South, tackling themes of justice and morality.",
 },
 {
 name: "Harry Potter and the Philosopher's Stone",
 author: "J.K. Rowling",
 publication: "Bloomsbury",
 rating: 4.8,
 description:
 "The first book in the beloved Harry Potter series, following the young wizard's journey as he discovers his magical heritage.",
 },

 {
 name: "1984",
 author: "George Orwell",
 publication: "Secker & Warburg",
 rating: 4.6,
 description:
 "A dystopian novel depicting a totalitarian regime, surveillance, and the struggle for individual freedom.",
 },
];

const App = () => {
  return (
    <div style={{ width: "90vw", margin: "5rem auto"}}>
      <h1>My Library</h1>
      <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "3rem",
      }}>
        {books.map((book, index) => (
          <BookItem
          key={index}
          name={book.name}
          author={book.author}
          publication={book.publication}
          rating={book.rating}
          description={book.description}
          />
        ))}
      </div>
    </div>
  )
}

export default App;