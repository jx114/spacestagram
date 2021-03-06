const express = require('express');

const router = express.Router();
const apodCtrl = require('../../controllers/APOD');

router.get('/readAPODS', apodCtrl.readAPODS);
router.patch('/patchLikes/:id', apodCtrl.patchLikes);

module.exports = router;
