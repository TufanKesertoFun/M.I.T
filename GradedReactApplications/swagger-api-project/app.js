const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const app = express();

// Define Swagger options
const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Sample API',
      version: '1.0.0',
      description: 'Sample API with GET and POST methods',
    },
  },
  apis: ['./app.js'], // Path to the file where the Swagger annotations are located
};

// Generate Swagger specs
const specs = swaggerJsdoc(options);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Define API routes
/**
 * @swagger
 * /api/resource:
 *   get:
 *     summary: Retrieve a list of users
 *     description: Returns a list of users from the database
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The user's ID
 *                   username:
 *                     type: string
 *                     description: The user's username
 *                   email:
 *                     type: string
 *                     description: The user's email address
 */
app.get('/api/resource', (req, res) => {
  res.send('GET request received');
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     description: Creates a new user in the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's username
 *               email:
 *                 type: string
 *                 description: The user's email address
 *               password:
 *                 type: string
 *                 description: The user's password
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The user's ID
 *                 username:
 *                   type: string
 *                   description: The user's username
 *                 email:
 *                   type: string
 *                   description: The user's email address
 */
app.post('/api/users', (req, res) => {
  res.send('POST request received');
});

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update an existing user
 *     description: Updates a user's details in the database
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The user's ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's new username
 *               email:
 *                 type: string
 *                 description: The user's new email address
 *               password:
 *                 type: string
 *                 description: The user's new password
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The user's ID
 *                 username:
 *                   type: string
 *                   description: The user's username
 *                 email:
 *                   type: string
 *                   description: The user's email address
 */
app.put('/api/users/:id', (req, res) => {
  res.send('PUT request received');
});

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user
 *     description: Deletes a user from the database
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The user's ID
 *     responses:
 *       204:
 *         description: User deleted successfully
 */
app.delete('/api/users/:id', (req, res) => {
  res.send('DELETE request received');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
