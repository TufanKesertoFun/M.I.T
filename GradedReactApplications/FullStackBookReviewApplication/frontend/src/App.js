import React, { useState } from 'react';
import BookList from './BookList';
import BookDetails from './BookDetails';

const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  const handleBackToList = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      {!selectedBook ? (
        <BookList onBookSelect={handleBookSelect} />
      ) : (
        <BookDetails book={selectedBook} onBack={handleBackToList} />
      )}
    </div>
  );
};

export default App;
