const express = require('express');
const app = express();

// Serve files from the public directory.
// The server will always be run from the project root, which is why we don't
// need to go up a level before accessing the directory.
app.use(express.static('public'));

// Start listening.
app.listen(process.env.PORT || 8080);
