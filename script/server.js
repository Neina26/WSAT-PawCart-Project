const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Read user data from JSON file
    fs.readFile(path.join(__dirname, '../database.json'), (err, data) => {
       

        if (err) {
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
        try {
            const users = JSON.parse(data);
            const user = users.find(u => u.email === email && u.password === password);
        
            if (user) {
                res.json({ success: true });
            } else {
                res.json({ success: false, message: 'Invalid email or password' });
            }
        } catch (parseError) {
            return res.status(500).json({ success: false, message: 'Error parsing user data' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});