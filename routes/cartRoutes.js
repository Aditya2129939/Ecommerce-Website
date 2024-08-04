const express = require('express');
const { getCart, addItemToCart, removeItemFromCart } = require('../controllers/cartController');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

router.get('/', auth, getCart);
router.post('/', auth, addItemToCart);
router.delete('/', auth, removeItemFromCart);

module.exports = router;
