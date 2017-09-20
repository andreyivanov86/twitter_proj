'use strict';

const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', (req, res, next) => {
  let allTweets = tweetBank.list();
  res.render('index', {title: 'Tweets.js', tweets: allTweets, showForm: true});
})

router.get( '/users/:name', function (req, res, next) {
  let tweetsForName = tweetBank.find({name: req.params.name});
  res.render('index', {title: 'Tweets.js', tweets: tweetsForName, showForm: false})
});

router.get('/tweets/:id', function(req, res, next) {
  let tweetId = tweetBank.find({id: parseInt(req.params.id, 10)});
  res.render('index', {title: 'Tweets.js', tweets: tweetId, showForm: false})
})

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;
