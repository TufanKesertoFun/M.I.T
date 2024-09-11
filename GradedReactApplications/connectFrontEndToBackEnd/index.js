const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});
app.listen(4000, () => {
    console.log('Server running on port 4000');
});