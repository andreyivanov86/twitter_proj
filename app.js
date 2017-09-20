const express = require( 'express' );
const nunjucks = require('nunjucks');
const router = require('./routes');
var bodyParser = require('body-parser');

const app = express();

//sets the rendering
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

// renders accordingly with index.js (routes)
app.use(router);

// default public folder using express.static middelware
app.use(express.static('public'));

// body parser for HTML FORM submit and for AJAX requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// server listener
app.listen(3000, function() {
  console.log('Listening...');
})
