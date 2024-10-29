const express = require('express');
const router = express.Router();

//Controllers
const homeController = require('../controllers/home.controller');
const goalController = require('../controllers/goal.controller');
const generateController = require('../controllers/generate.controller');




//End Points
router.get('/', (req, res) => (res.redirect('/home')));
router.route('/home').get(homeController.get).post(homeController.post);
router.route('/goal').get(goalController.get).post(goalController.post);
router.route('/generate').get(generateController.get).post(generateController.post);


//Export
module.exports = router;