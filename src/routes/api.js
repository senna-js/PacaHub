const express = require('express');
const router = express.Router();
const hentaitv = require('../providers/hentai/hentaitv');
const hentaicity = require('../providers/hentai/hentaicity');

// Helper function to handle responses
const handleResponse = (res, promise) => {
    promise
        .then(results => res.json({ status: 'success', data: results }))
        .catch(error => res.status(500).json({ status: 'error', message: error.message }));
};

// HentaiTV endpoints
router.get('/hen/hentaitv/watch/:id', (req, res) => handleResponse(res, hentaitv.scrapeWatch(req.params.id)));
router.get('/hen/hentaitv/info/:id', (req, res) => handleResponse(res, hentaitv.scrapeInfo(req.params.id)));
router.get('/hen/hentaitv/search/:query/:page?', (req, res) => handleResponse(res, hentaitv.scrapeSearch(req.params.query, req.params.page || 1)));
router.get('/hen/hentaitv/genre/:genre/:page?', (req, res) => handleResponse(res, hentaitv.scrapeGenre(req.params.genre, req.params.page || 1)));
router.get('/hen/hentaitv/recent', (req, res) => handleResponse(res, hentaitv.scrapeRecent()));
router.get('/hen/hentaitv/trending', (req, res) => handleResponse(res, hentaitv.scrapeTrending()));
router.get('/hen/hentaitv/random', (req, res) => handleResponse(res, hentaitv.scrapeRandom()));

// HentaiCity endpoints
router.get('/hen/hentaicity/recent', (req, res) => handleResponse(res, hentaicity.scrapeRecent()));
router.get('/hen/hentaicity/popular', (req, res) => handleResponse(res, hentaicity.scrapePopular()));

module.exports = router; 