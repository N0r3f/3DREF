const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

router.post('/', imageController.addImage);
router.put('/:id', imageController.modifyImage);
router.delete('/:id', imageController.deleteImage);
router.get('/category/:category', imageController.getImagesByCategory);
router.get('/tag/:tag', imageController.getImagesByTag);

module.exports = router;
