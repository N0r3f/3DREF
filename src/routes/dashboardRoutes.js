const express = require('express');
const router = express.Router();

// Import the dashboard controller
const dashboardController = require('../controllers/dashboardController');

// Define the routes
router.get('/', dashboardController.getDashboard);
router.post('/login', dashboardController.login);
router.get('/statistics', dashboardController.getStatistics);
router.post('/image', dashboardController.addImage);
router.put('/image/:id', dashboardController.updateImage);
router.delete('/image/:id', dashboardController.deleteImage);
router.post('/category', dashboardController.addCategory);
router.put('/category/:id', dashboardController.updateCategory);
router.delete('/category/:id', dashboardController.deleteCategory);
router.post('/tag', dashboardController.addTag);
router.put('/tag/:id', dashboardController.updateTag);
router.delete('/tag/:id', dashboardController.deleteTag);

// Export the router
module.exports = router;