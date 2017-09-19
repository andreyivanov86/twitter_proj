const express = require( 'express' );
const nunjucks = require('nunjucks');
const app = express();


app.set('view engine', 'html');
app.engine('html', nunjucks.render)
nunjucks.configure('views', {noCache: true});

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
const news = [{name: 'ESPN'}, {name: 'WSJ'}];

app.get('/', (req, res) => {
  res.render('index', {title: 'Hall of Fame', object: people} );
})
app.get('/news', (req, res) => {
  res.render('index', {title: 'Hall of Fame', object: news} );
})

app.listen(3000, function() {
  console.log('Server listening...');
})
