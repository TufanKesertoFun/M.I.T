import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Card, 
  CardContent, 
  List, 
  ListItem, 
  ListItemText, 
  IconButton, 
  Box 
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const BookDetails = ({ book, onBack }) => {
  const [details, setDetails] = useState(book);
  const [review, setReview] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [newBookData, setNewBookData] = useState({
    title: book.title,
    author: book.author,
  });
  const [editingReview, setEditingReview] = useState(null);
  const [editedReviewText, setEditedReviewText] = useState('');
  const [isAddingBook, setIsAddingBook] = useState(false);
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/books/${book._id}`);
        setDetails(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    if (book) {
      fetchBookDetails();
    }
  }, [book]);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!review.trim()) {
      setSubmitStatus('Review cannot be empty');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:4000/books/${book._id}/reviews`, { review });

      setDetails((prevDetails) => ({
        ...prevDetails,
        reviews: [...prevDetails.reviews, response.data],
      }));

      setReview('');
      setSubmitStatus('Review added successfully!');
    } catch (error) {
      console.error('Error submitting review:', error);
      setSubmitStatus('Failed to add review');
    }
  };

  const handleUpdateBook = async () => {
    try {
      await axios.put(`http://localhost:4000/books/${book._id}`, newBookData);
      setDetails((prevDetails) => ({
        ...prevDetails,
        title: newBookData.title,
        author: newBookData.author,
      }));
      setEditMode(false);
      setSubmitStatus('Book updated successfully!');
    } catch (error) {
      console.error('Error updating book:', error);
      setSubmitStatus('Failed to update book');
    }
  };

  const handleDeleteBook = async () => {
    try {
      await axios.delete(`http://localhost:4000/books/${book._id}`);
      setSubmitStatus('Book deleted successfully!');
      onBack(); // Navigate back to the list
    } catch (error) {
      console.error('Error deleting book:', error);
      setSubmitStatus('Failed to delete book');
    }
  };

  const handleDeleteReview = async (reviewId) => {
    if (!reviewId) {
      setSubmitStatus('Review ID is undefined');
      return;
    }

    try {
      await axios.delete(`http://localhost:4000/books/${book._id}/reviews/${reviewId}`);
      setDetails((prevDetails) => ({
        ...prevDetails,
        reviews: prevDetails.reviews.filter((r) => r._id !== reviewId),
      }));
      setSubmitStatus('Review deleted successfully!');
    } catch (error) {
      console.error('Error deleting review:', error);
      setSubmitStatus('Failed to delete review');
    }
  };

  const handleEditReview = (review) => {
    setEditingReview(review);
    setEditedReviewText(review.review);
  };

  const handleUpdateReview = async () => {
    if (!editingReview) {
      setSubmitStatus('No review selected for editing');
      return;
    }

    try {
      await axios.put(`http://localhost:4000/books/${book._id}/reviews/${editingReview._id}`, {
        review: editedReviewText,
      });
      setDetails((prevDetails) => ({
        ...prevDetails,
        reviews: prevDetails.reviews.map((r) =>
          r._id === editingReview._id ? { ...r, review: editedReviewText } : r
        ),
      }));
      setEditingReview(null);
      setSubmitStatus('Review updated successfully!');
    } catch (error) {
      console.error('Error updating review:', error);
      setSubmitStatus('Failed to update review');
    }
  };

  const handleAddBook = async () => {
    try {
      const response = await axios.post('http://localhost:4000/books', newBook);
      setNewBook({ title: '', author: '' });
      setSubmitStatus('Book added successfully!');
      setIsAddingBook(false);
      // Optionally refresh the list of books here
    } catch (error) {
      console.error('Error adding book:', error);
      setSubmitStatus('Failed to add book');
    }
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Button variant="text" onClick={onBack} style={{ marginBottom: '20px' }}>
            Return to Book List
          </Button>
          {isAddingBook ? (
            <Box>
              <Typography variant="h5" component="div">
                Add New Book
              </Typography>
              <TextField
                label="Title"
                fullWidth
                margin="normal"
                value={newBook.title}
                onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
              />
              <TextField
                label="Author"
                fullWidth
                margin="normal"
                value={newBook.author}
                onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
              />
              <Button variant="contained" color="primary" onClick={handleAddBook}>
                Add Book
              </Button>
              <Button variant="text" onClick={() => setIsAddingBook(false)}>
                Cancel
              </Button>
            </Box>
          ) : (
            <Box display="flex" justifyContent="flex-start" alignItems="center">
              {editMode ? (
                <>
                  <TextField
                    label="Title"
                    fullWidth
                    margin="normal"
                    value={newBookData.title}
                    onChange={(e) => setNewBookData({ ...newBookData, title: e.target.value })}
                  />
                  <TextField
                    label="Author"
                    fullWidth
                    margin="normal"
                    value={newBookData.author}
                    onChange={(e) => setNewBookData({ ...newBookData, author: e.target.value })}
                  />
                  <Button variant="contained" color="primary" onClick={handleUpdateBook}>
                    Update Book
                  </Button>
                  <Button variant="text" onClick={() => setEditMode(false)}>
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<EditIcon />}
                    onClick={() => setEditMode(true)}
                    style={{ marginRight: '10px' }}
                  >
                    Edit Book
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={handleDeleteBook}
                    style={{ marginRight: '10px' }}
                  >
                    Delete Book
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setIsAddingBook(true)}
                  >
                    Add New Book
                  </Button>
                </>
              )}
            </Box>
          )}

          {!isAddingBook && (
            <>
              <Typography variant="h6" component="div" style={{ marginTop: '20px' }}>
                Reviews
              </Typography>
              <List>
                {details.reviews &&
                  details.reviews.map((review) => (
                    <ListItem key={review._id} alignItems="flex-start">
                      {editingReview && editingReview._id === review._id ? (
                        <Box>
                          <TextField
                            label="Edit Review"
                            fullWidth
                            margin="normal"
                            value={editedReviewText}
                            onChange={(e) => setEditedReviewText(e.target.value)}
                          />
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleUpdateReview}
                          >
                            Update Review
                          </Button>
                          <Button
                            variant="text"
                            onClick={() => setEditingReview(null)}
                          >
                            Cancel
                          </Button>
                        </Box>
                      ) : (
                        <Box display="flex" alignItems="center">
                          <ListItemText primary={review.review} />
                          <IconButton
                            color="primary"
                            onClick={() => handleEditReview(review)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            color="error"
                            onClick={() => handleDeleteReview(review._id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      )}
                    </ListItem>
                  ))}
              </List>

              <Typography variant="h6" component="div" style={{ marginTop: '20px' }}>
                Add a Review
              </Typography>
              <form onSubmit={handleSubmitReview}>
                <TextField
                  label="Review"
                  fullWidth
                  margin="normal"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                />
                <Button variant="contained" color="primary" type="submit">
                  Submit Review
                </Button>
              </form>
              {submitStatus && <Typography color="error">{submitStatus}</Typography>}
            </>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default BookDetails;
