const express = require( 'express' );
const nunjucks = require('nunjucks');
const router = require('./routes');
const app = express();

//sets the rendering
app.set('view engine', 'html');
app.engine('html', nunjucks.render)
nunjucks.configure('views', {noCache: true});

// renders
app.use('/', router);
// default public folder
app.use(express.static('public'));

app.listen(3000, function() {
  console.log('Server listening...');
})
