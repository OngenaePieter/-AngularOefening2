var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
  if (err) return console.log(err)
  db = database.db('exam')
})

/* GET users listing. */
router.get('/:naam', function (req, res, next) {
  if (req.params.naam != "" || req.params.naam != undefined) {
    db.collection("students").find({ naam: req.params.naam }).toArray((err, result) => {
      console.log(result)
      res.json(result);
    })
  } else {
    db.collection("students").find().toArray((err, result) => {
      console.log(result)
      res.json(result);
    })
  }
});

router.get('/', (req, res) => {
  db.collection("students").find().toArray((err, result) => {
    console.log(result)
    res.json(result);
  })
})

router.post('/toevoegen', (req, res) => {
  console.log(req.body)
  db.collection("students").insertOne({ naam: req.body.naam, geboortedatum: req.body.geboortedatum, studierichting: req.body.studierichting}, (err, response) => res.json(response))
})

module.exports = router;
