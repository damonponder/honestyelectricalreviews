const express = require('express');
const fetch = import('node-fetch');
const app = express();
const PORT = process.env.PORT || 5000;

const API_KEY = 'AIzaSyD8QfyVeKrUxvofs48OFgyu2pEHjfte_S8';
const PLACE_ID = 'ChIJFZ_1ltDhTocRoBbX0ErSidY';

app.get('/reviews', async (req, res) => {
    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Google reviews' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
