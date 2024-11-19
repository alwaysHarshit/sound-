const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Serve music files from the /songs directory
const songsDir = path.join(__dirname, '../songs');
app.use('/song', express.static(songsDir));

// Serve the frontend (index.html, JS, CSS) from the /public directory
app.use(express.static(path.join(__dirname, '../public')));

// Endpoint to get a list of songs
app.get('/api/songs', (req, res) => {
    fs.readdir(songsDir, (err, files) => {
        if (err) {
            console.error('Error reading songs directory:', err);
            return res.status(500).send('Unable to fetch songs.');
        }
        // Filter to only include audio files (e.g., .mp3, .wav)
        const songs = files.filter(file => /\.(mp3|wav|ogg)$/i.test(file));
        res.json(songs);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello, world!');
});
