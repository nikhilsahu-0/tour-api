const express = require('express');
const {
  getTours,
  getTour,
  addTour,
  updateTour,
  deleteTour,
  aliasTopTours,
} = require('./../controllers/tourControllers');
const router = express.Router();

// router.param('id',checkId);

router.route('/top-5-cheap').get(aliasTopTours, getTours);
router.route('/').get(getTours).post(addTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
