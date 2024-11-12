const { POKENEAS } = require('../mocks/pokeneas');
const express = require('express');
const router = express.Router();
const os = require("os");

let pokeneas_size = POKENEAS.length;

router.get('/full', (req, res) => {
    let data  = POKENEAS[Math.floor(Math.random() * pokeneas_size)];
    data.container = os.hostname();
    res.json( data );
});



router.get('/raw', (req, res) => {
    let data = {}; 

    let randomPokenea = POKENEAS[Math.floor(Math.random() * pokeneas_size)];
    let { image, phrase, ...pokeneaWithoutImage } = randomPokenea;

    data.pokenea = pokeneaWithoutImage;
    data.container = os.hostname();

    res.json(data);
});



router.get('/all', (req, res) => {
    res.json(POKENEAS);
});


module.exports = router;
