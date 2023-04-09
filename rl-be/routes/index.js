const express = require('express');
const router = express.Router();

const indexCntrl = require('../controllers/index');

router.get("/", indexCntrl.index_get);


// Export to other files
module.exports = router;
