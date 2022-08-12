const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//? MiddleWare --------------------------------------------------------------------------------------------------------------

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware. 😁');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//? Route Handlers-----------------------------------------------------------------------------------------------------------

// const getAllTours = (req, res) => {
//   console.log(req.requestTime);

//   res.status(200).json({
//     status: 'success',
//     requestedAt: req.requestTime,
//     results: tours.length,
//     data: {
//       tours: tours,
//     },
//   });
// };

//* Get specific tour ----------------------------

// const getTourById = (req, res) => {
//   console.log(req.params);

//   const id = req.params.id * 1;

//   if (id > tours.length) {
//     return res.status(404).json({
//       status: 'failed',
//       message: 'invalid ID',
//     });
//   }

//   const tour = tours.find((e) => e.id === id);

//   res.status(200).json({
//     status: 'success',
//     data: {
//       tour: tour,
//     },
//   });
// };

//* Add a new tour -----------------------------------------

// const addTour = (req, res) => {
//   // console.log(req.body)

//   const newId = tours[tours.length - 1].id + 1;
//   const newTour = Object.assign({ id: newId }, req.body);

//   tours.push(newTour);
//   fs.writeFile(
//     `${__dirname}/dev-data/data/tours-simple.json`,
//     JSON.stringify(tours),
//     (err) => {
//       res.status(201).json({
//         status: 'success',
//         data: {
//           tour: newTour,
//         },
//       });
//     }
//   );
// };

//* Edit existing tour ------------------------------------------

// const patchTour = (req, res) => {
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'invalid ID',
//     });
//   }
//   res.status(200).json({
//     status: 'success',
//     data: {
//       tour: '<Updated tour here...>',
//     },
//   });
// };

//* Delete existing tour -----------------------------

// const deleteTour = (req, res) => {
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'invalid ID',
//     });
//   }
//   res.status(204).json({
//     status: 'success',
//     data: null,
//   });
// };

//* User Endpoints---------------------------------------

// const getAllUsers = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined',
//   });
// };
// const getUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined',
//   });
// };
// const createUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined',
//   });
// };
// const updateUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined',
//   });
// };
// const deleteUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined',
//   });
// };

//? API endpoints ------------------------------------------------------------------------------------------------------------

//& Creating the router-----------

// const tourRouter = express.Router();
// const userRouter = express.Router();

//& Mounting a new router-----------

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//& Using our custom router to create the endpoint-----------

// tourRouter.route('/').get(getAllTours).post(addTour);

// tourRouter.route('/:id').get(getTourById).patch(patchTour).delete(deleteTour);

// userRouter.route('/').get(getAllUsers).post(createUser);

// userRouter
//   .route('/:id')
//   .get(getUser)
//   .patch(updateUser)
//   .delete(deleteUser);

module.exports = app;
