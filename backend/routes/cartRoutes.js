const express = require('express');
const router = express.Router();

// @desc    Get cart items
// @route   GET /api/cart
// @access  Private
router.get('/', (req, res) => {
    res.json({ message: 'Get cart items' });
});

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
router.post('/', (req, res) => {
    res.json({ message: 'Add item to cart' });
});

// @desc    Update cart item
// @route   PUT /api/cart/:id
// @access  Private
router.put('/:id', (req, res) => {
    res.json({ message: `Update cart item ${req.params.id}` });
});

// @desc    Remove item from cart
// @route   DELETE /api/cart/:id
// @access  Private
router.delete('/:id', (req, res) => {
    res.json({ message: `Remove item ${req.params.id} from cart` });
});

module.exports = router; 