// Create web server
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set static folder
app.use(express.static('public'));

// Use body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Import routes
const indexRouter = require('./routes/index');
const commentRouter = require('./routes/comment');

// Use routes
app.use('/', indexRouter);
app.use('/comment', commentRouter);

// Run server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});