// create web Server
// Create DB Server
// Create API Server
// Create API
// Create API Router
// Create API Controller
// Create API Model
// Create API View

const express = require('express');
const router = express.Router();


const commentController = require('../controllers/comments');

// Create
router.post('/', commentController.create);
// Read
router.get('/:id', commentController.read);
// Update
router.put('/:id', commentController.update);
// Delete
router.delete('/:id', commentController.delete);

module.exports = router;