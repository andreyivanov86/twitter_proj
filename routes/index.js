const express = require('express')
const router = express.Router();
const tweetbank = require('../tweetBank');

router.get('/', (req, res) =>{
  let tweets = tweetbank.list();
  res.render('index', {tweets: tweets});
})

module.exports = router;
