const express = require('express');
const router = express.Router();
const hentaitv = require('../providers/hentai/hentaitv');
const hentaicity = require('../providers/hentai/hentaicity');
const mangakakalot = require('../providers/manga/mangakakalot/controler/mangaKakalotController');
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

// MangaKakalot endpoints
router.get("/manga/kakalot/read/:mangaId?/:chapterId?", mangakakalot.getMangaChapterImages);
router.get("/manga/kakalot/details/:id", mangakakalot.getMangaDetails);
router.get("/manga/kakalot/search/:query?/:page?", mangakakalot.getMangaSearch);
router.get("/manga/kakalot/latest/:page?", mangakakalot.getLatestMangas);
router.get("/manga/kakalot/popular/:page?", mangakakalot.getPopularMangas);
router.get("/manga/kakalot/newest/:page?", mangakakalot.getNewestMangas);
router.get("/manga/kakalot/completed/:page?", mangakakalot.getCompletedMangas);
router.get("/manga/kakalot/popular-now", mangakakalot.getPopularNowMangas);
router.get("/manga/kakalot/home", mangakakalot.getHomePage);


module.exports = router; 