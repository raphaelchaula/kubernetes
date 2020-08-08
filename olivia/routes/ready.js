var express = require('express');
var router = express.Router();

/* GET ready. */
router.get('/', (req, res, next) => {
  res.status(200).send('Olivia:v3 is ready');
});

module.exports = router;
