const express = require('express');
const router = express.Router();

//Movies
router.get('/movies', (req, res, next) => res.render('movies'));

module.exports = router;