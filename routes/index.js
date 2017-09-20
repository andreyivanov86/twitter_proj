'use strict';

const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', (req, res, next) => {
  let allTweets = tweetBank.list();
  res.render('index', {title: 'Tweets.js', tweets: allTweets});
})

router.get( '/users/:name', function (req, res) {
  let tweetsForName = tweetBank.find({name: req.params.name});
  res.render('index', {title: 'Tweets.js', tweets: tweetsForName})
});



module.exports = router;
