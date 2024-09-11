const MongoClient = require('mongodb').MongoClient;

// Connection string to MongoDB
const url = 'mongodb://localhost:27017';
const dbName = 'badbank';

async function insertCustomers() {
    const client = new MongoClient(url); // Removed deprecated options

    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log('Connected to MongoDB successfully');

        // Select the database
        const db = client.db(dbName);

        // Select the 'customers' collection
        const collection = db.collection('customers');

        // Array to hold 100 customer documents
        const customers = [];

        // Create 100 dummy customer documents
        for (let i = 1; i <= 100; i++) {
            customers.push({
                customerId: i,
                firstName: `FirstName${i}`,
                lastName: `LastName${i}`,
                email: `customer${i}@example.com`,
                phoneNumber: `555-000${i.toString().padStart(3, '0')}`,
                address: {
                    street: `${i} Main St`,
                    city: `City${i}`,
                    state: `State${i}`,
                    zipCode: `0000${i}`
                },
                accountBalance: Math.floor(Math.random() * 10000), // Random account balance
                createdAt: new Date() // Current date and time
            });
        }

        // Insert the array of 100 customers into the 'customers' collection
        const result = await collection.insertMany(customers);

        console.log(`Inserted ${result.insertedCount} documents into the customers collection.`);
    } catch (err) {
        console.error('An error occurred:', err);
    } finally {
        // Close the MongoDB connection
        await client.close();
        console.log('Connection to MongoDB closed');
    }
}

// Run the insertCustomers function
insertCustomers();
