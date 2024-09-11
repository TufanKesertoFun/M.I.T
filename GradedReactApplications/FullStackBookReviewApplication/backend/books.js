const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const router = express.Router();

const mongoUrl = "mongodb://localhost:27017";
const dbName = "bookReviewsApp";

// Function to connect to MongoDB
async function connectToDB() {
  const client = await MongoClient.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return client;
}

// Middleware to validate ObjectId
function isValidObjectId(id) {
  return ObjectId.isValid(id) && String(new ObjectId(id)) === id;
}

// GET all books with pagination
router.get('/', async (req, res) => {
  const client = await connectToDB();
  const db = client.db(dbName);
  const collection = db.collection('books');

  const page = parseInt(req.query._page) || 1;
  const limit = parseInt(req.query._limit) || 10;
  const skip = (page - 1) * limit;

  try {
    const books = await collection.find().skip(skip).limit(limit).toArray();
    const totalCount = await collection.countDocuments();

    res.setHeader('X-Total-Count', totalCount);
    res.json(books);
  } catch (err) {
    console.error("Error fetching books:", err.message);
    res.status(500).send("An error occurred while fetching books");
  } finally {
    client.close();
  }
});

// GET a specific book by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).send("Invalid ID format");
  }

  const client = await connectToDB();
  const db = client.db(dbName);
  const collection = db.collection('books');

  try {
    const book = await collection.findOne({ _id: new ObjectId(id) });
    if (!book) {
      res.status(404).send("Book not found");
    } else {
      res.json(book);
    }
  } catch (err) {
    console.error("Error fetching book:", err.message);
    res.status(500).send("An error occurred while fetching the book");
  } finally {
    client.close();
  }
});

// CREATE a new book
router.post('/', async (req, res) => {
  const client = await connectToDB();
  const db = client.db(dbName);
  const collection = db.collection('books');

  const { title, author, publishedDate } = req.body;
  if (!title || !author || !publishedDate) {
    return res.status(400).send("Title, Author, and Published Date are required");
  }

  try {
    const newBook = { title, author, publishedDate };
    const result = await collection.insertOne(newBook);

    if (result.insertedCount === 1) {
      res.status(201).json(result.ops[0]); // Respond with the newly created book
    } else {
      throw new Error("Failed to insert the book");
    }
  } catch (err) {
    console.error("Error creating book:", err.message);
    res.status(500).send("An error occurred while creating the book");
  } finally {
    client.close();
  }
});

// UPDATE an existing book by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).send("Invalid ID format");
  }

  const client = await connectToDB();
  const db = client.db(dbName);
  const collection = db.collection('books');

  const updatedBook = req.body;
  const filter = { _id: new ObjectId(id) };
  const updateOperation = { $set: updatedBook };

  try {
    const updateResult = await collection.updateOne(filter, updateOperation);
    if (updateResult.matchedCount === 0) {
      res.status(404).send("Book not found");
    } else {
      res.status(200).send("Book updated successfully");
    }
  } catch (err) {
    console.error("Error updating book:", err.message);
    res.status(500).send("An error occurred while updating the book");
  } finally {
    client.close();
  }
});

// DELETE a book by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).send("Invalid ID format");
  }

  const client = await connectToDB();
  const db = client.db(dbName);
  const collection = db.collection('books');

  const filter = { _id: new ObjectId(id) };

  try {
    const deleteResult = await collection.deleteOne(filter);
    if (deleteResult.deletedCount === 0) {
      res.status(404).send("Book not found");
    } else {
      res.status(200).send("Book deleted successfully");
    }
  } catch (err) {
    console.error("Error deleting book:", err.message);
    res.status(500).send("An error occurred while deleting the book");
  } finally {
    client.close();
  }
});

// CREATE a new review for a specific book
router.post('/:id/reviews', async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).send("Invalid ID format");
  }

  const client = await connectToDB();
  const db = client.db(dbName);
  const collection = db.collection('books');

  const { review } = req.body;
  if (!review) {
    return res.status(400).send("Review content is required");
  }

  const reviewDoc = { _id: new ObjectId(), review };
  const filter = { _id: new ObjectId(id) };
  const updateOperation = { $push: { reviews: reviewDoc } };

  try {
    const updateResult = await collection.updateOne(filter, updateOperation);

    if (updateResult.matchedCount === 0) {
      res.status(404).send("Book not found");
    } else {
      res.status(201).json(reviewDoc); // Return the created review
    }
  } catch (err) {
    console.error("Error adding review:", err.message);
    res.status(500).send("An error occurred while adding the review");
  } finally {
    client.close();
  }
});

// UPDATE a specific review for a specific book
router.put('/:id/reviews/:reviewId', async (req, res) => {
  const { id, reviewId } = req.params;
  const { review } = req.body;

  if (!isValidObjectId(id) || !isValidObjectId(reviewId)) {
    return res.status(400).send("Invalid ID format");
  }

  if (!review) {
    return res.status(400).send("Review content is required");
  }

  const client = await connectToDB();
  const db = client.db(dbName);
  const collection = db.collection('books');

  try {
    const updateResult = await collection.updateOne(
      { _id: new ObjectId(id), "reviews._id": new ObjectId(reviewId) },
      { $set: { "reviews.$.review": review } }
    );

    if (updateResult.matchedCount === 0) {
      return res.status(404).send("Review not found");
    }

    res.status(200).send("Review updated successfully");
  } catch (err) {
    console.error("Error updating review:", err.message);
    res.status(500).send("An error occurred while updating the review");
  } finally {
    client.close();
  }
});

// DELETE a specific review for a specific book
router.delete('/:id/reviews/:reviewId', async (req, res) => {
  const { id, reviewId } = req.params;

  if (!isValidObjectId(id) || !isValidObjectId(reviewId)) {
    return res.status(400).send("Invalid ID format");
  }

  const client = await connectToDB();
  const db = client.db(dbName);
  const collection = db.collection('books');

  try {
    const updateResult = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $pull: { reviews: { _id: new ObjectId(reviewId) } } }
    );

    if (updateResult.matchedCount === 0) {
      return res.status(404).send("Review not found");
    }

    res.status(200).send("Review deleted successfully");
  } catch (err) {
    console.error("Error deleting review:", err.message);
    res.status(500).send("An error occurred while deleting the review");
  } finally {
    client.close();
  }
});

module.exports = router;
