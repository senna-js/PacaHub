const express = require('express');
const router = express.Router();
const hentaitv = require('../providers/hentai/hentaitv');
const hentaicity = require('../providers/hentai/hentaicity');

// HentaiTV watch endpoint
router.get('/hentaitv/watch/:id', async (req, res) => {
    try {
        const results = await hentaitv.scrapeWatch(req.params.id);
        res.json(results);
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// HentaiTV info endpoint
router.get('/hentaitv/info/:id', async (req, res) => {
    try {
        const results = await hentaitv.scrapeInfo(req.params.id);
        res.json({
            status: 'success',
            data: results
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// HentaiTV search endpoint
router.get('/hentaitv/search/:query/:page?', async (req, res) => {
    try {
        const results = await hentaitv.scrapeSearch(req.params.query, req.params.page || 1);
        res.json({
            status: 'success',
            data: results
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// HentaiTV genre endpoint
router.get('/hentaitv/genre/:genre/:page?', async (req, res) => {
    try {
        const results = await hentaitv.scrapeGenre(req.params.genre, req.params.page || 1);
        res.json({
            status: 'success',
            data: results
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// HentaiTV recent uploads endpoint
router.get('/hentaitv/recent', async (req, res) => {
    try {
        const results = await hentaitv.scrapeRecent();
        res.json({
            status: 'success',
            data: results
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// HentaiTV trending endpoint
router.get('/hentaitv/trending', async (req, res) => {
    try {
        const results = await hentaitv.scrapeTrending();
        res.json({
            status: 'success',
            data: results
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// HentaiTV random endpoint
router.get('/hentaitv/random', async (req, res) => {
    try {
        const results = await hentaitv.scrapeRandom();
        res.json({
            status: 'success',
            data: results
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// HentaiCity recent uploads endpoint
router.get('/hentaicity/recent', async (req, res) => {
    try {
        const results = await hentaicity.scrapeRecent();
        res.json({
            status: 'success',
            data: results
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// HentaiCity popular endpoint
router.get('/hentaicity/popular', async (req, res) => {
    try {
        const results = await hentaicity.scrapePopular();
        res.json({
            status: 'success',
            data: results
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

module.exports = router; 