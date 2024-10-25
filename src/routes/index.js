const express = require('express');
const router = express.Router();

// Ruta básica
router.get('/', (req, res) => {
    res.render('home');
});

// const registerAccount = require('../controllers/registerAccount.controller.js');
// router.route('/registerAccount')
//     .get(validateAccess, registerAccount.get)
//     .post(validateAccess, registerAccount.post);

module.exports = router;