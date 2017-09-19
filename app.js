const express = require( 'express' );
const nunjucks = require('nunjucks');
const app = express();


app.set('view engine', 'html');
app.engine('html', nunjucks.render)
nunjucks.configure('views', {noCache: true});

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

// app.use(function(req, res, next) {
//   console.log(res.method);
//   next();
// })

app.get('/', (req, res) => {
  res.render('index', {title: 'Hall of Fame', people} );
})

app.listen(3000, function() {
  console.log('Server listening...');
})
