const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');


//Sets / route to homePage (layout.pug)
router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);

module.exports = router;
