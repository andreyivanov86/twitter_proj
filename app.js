const express = require( 'express' );
const nunjucks = require('nunjucks');
const router = require('./routes');
const app = express();

//sets the rendering
app.set('view engine', 'html');
app.engine('html', nunjucks.render)
nunjucks.configure('views', {noCache: true});

// renders accordingly with index.js (routes)
app.use('/', router);

// default public folder using express.static middelware
app.use(express.static('public'));

// server listener
app.listen(3000, function() {
  console.log('Server listening...');
})
