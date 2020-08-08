var express = require('express');
var router = express.Router();

/* GET health. */
router.get('/', (req, res, next) => {
  res.status(200).send('Olivia:v3 is healthy');
});

module.exports = router;
