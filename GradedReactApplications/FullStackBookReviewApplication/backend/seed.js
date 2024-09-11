const { MongoClient } = require("mongodb");

const mongoUrl = "mongodb://localhost:27017";
const dbName = "bookReviewsApp";
const client = new MongoClient(mongoUrl);

async function seedDB() {
  const fetch = (await import('node-fetch')).default;

  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection("books");

    const booksCount = await collection.countDocuments();
    if (booksCount > 0) {
      console.log("Database already contains books. Removing existing books...");
      await collection.deleteMany({});
      console.log("Existing books removed.");
    }

    console.log("Fetching books from API...");
    const response = await fetch("https://openlibrary.org/subjects/fiction.json?limit=1000");
    const data = await response.json();
    const books = data.works.map((book) => ({
      title: book.title,
      author: book.authors.map((author) => author.name).join(", "),
      reviews: [],
    }));

    console.log(`Inserting ${books.length} books into the database...`);
    await collection.insertMany(books);
    console.log("Database seeded successfully!");

  } catch (err) {
    console.error("An error occurred:", err);
  } finally {
    await client.close();
  }
}

async function getPaginatedBooks(page, limit) {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("books");

    const books = await collection
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();

    console.log(`Page ${page} of books:`, books);
    return books;
  } catch (err) {
    console.error("An error occurred:", err);
  } finally {
    await client.close();
  }
}

// Seed the database with books
seedDB();

// Example of how to use pagination to retrieve books (page 1, 20 books per page)
getPaginatedBooks(1, 20);
