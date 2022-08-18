const express = require('express');
const { route } = require('express/lib/application');
const morgan = require('morgan');
const { resetWatchers } = require('nodemon/lib/monitor/watch');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
module.exports = app;

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);
app.use(express.static(`${__dirname}/public`));




