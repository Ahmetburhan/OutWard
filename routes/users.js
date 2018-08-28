var express = require('express');
var router = express.Router();
var users = require('../models/users.js');
const fs = require('fs');
const db = require('../utils/db');




/* GET users listing. */
router.get('/', function (req, res, next) {
  let counter = 1
  let loadDoc = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.send(document.getElementById("counter").innerHTML = counter++);

  }
  loadDoc()
  .then(() => {
    res.render('layout', { counter: counter });
  })
 
    .catch((err) => {
      res.sendStatus(500);
      res.render('error', { message: "Cannot get users", error: err });
    });
});

/* INSERT mocked user data */
router.get('/setup-mock-data', function (req, res, next) {
  users.insertMockData().then((result) => {
    res.render('status', { status: `${result.message}\nUsers in database: ${result.count}` });
  })
    .catch((err) => {
      res.render('error', { message: "Cannot insert mock data", error: err });
    });
});

module.exports = router;
