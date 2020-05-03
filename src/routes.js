const express = require('express');
const router = express.Router();
const UserController = require('./controllers/UserController');
const MeasureController = require('./controllers/MeasureController');
const FoodController = require('./controllers/FoodController');
const IngestedFoodController = require('./controllers/IngestedFoodController');

router.post('/users', UserController.create);
router.get('/users', UserController.index);
router.get('/users/:id', UserController.specificUser);

router.post('/measures', MeasureController.create);
router.get('/measures', MeasureController.index);
router.get('/measures/:user_id', MeasureController.specificUserMeasure);
router.delete('/measures/:id', MeasureController.delete);

router.post('/foods', FoodController.create);
router.get('/foods', FoodController.index);

router.post('/ingest', IngestedFoodController.create);
router.get('/ingest', IngestedFoodController.index);
router.get('/ingest/:user_id', IngestedFoodController.specificUserIngestions);

module.exports = router;