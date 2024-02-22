const express = require('express');
const { getHomepage } = require('../controllers/homeController');

const router=express.Router();


router.get('/',getHomepage);

router.get('/abc', (req, res) => {
    res.send('check ABC');
});

router.get('/hoidanit', (req, res) => {
    // res.send(`<h1> Hoi dan it </h1>`);
    res.render('sample.ejs');
});

module.exports = router;