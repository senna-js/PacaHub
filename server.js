require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);
app.get('/', async (req, res) => {
  return res.json({
    about: "Congratulations! You've found the Pacatai API. Visit /docs for more info.",
    status: 200,
    provider: [
      "https://hentaicity.com",
      "https://hentai.tv",
    ],
  });
});

app.get('/docs', (req, res) => {
    const docs = require('./public/docs/docs.json');
    res.json(docs);
});

app.get('/docs/genre', (req, res) => {
    const docs = require('./public/docs/genre.json');
    res.json(docs);
});

app.use((req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Route not found. Check our docs. /docs'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; 