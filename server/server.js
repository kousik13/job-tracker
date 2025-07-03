// 1️⃣ Import Express
const express = require('express');

// 2️⃣ Create an Express app
const app = express();

// 3️⃣ Define a port
const PORT = 7000;

// 4️⃣ Simple GET route
app.get('/api', (req, res) => {
    res.send('API is running!');
});

// 5️⃣ Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
