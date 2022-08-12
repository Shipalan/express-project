const express = require('express');
const {
  getAllTours,
  addTour,
  getTourById,
  patchTour,
  deleteTour,
  checkId,
  checkBody
} = require('./../controllers/tourController');

const router = express.Router();

//& Param middleware-----------------------------------------

router.param('id', checkId);

//& API endpoints-------------------------------------------------------------

router.route('/').get(getAllTours).post(checkBody, addTour);

router.route('/:id').get(getTourById).patch(patchTour).delete(deleteTour);

module.exports = router;
