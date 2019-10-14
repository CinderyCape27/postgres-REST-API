const express = require('express');
const morgan = require('morgan');
const app = express();

// Importing routes
const indexRoutes = require('./routes/routes');


// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Routes
app.use('/', indexRoutes)

// Server listening
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});