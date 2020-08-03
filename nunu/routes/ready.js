var express = require('express');
var router = express.Router();

/* GET ready. */
router.get('/', (req, res, next) => {
  res.status(200).send('Nunu is ready');
});

module.exports = router;
