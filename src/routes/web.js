const express = require('express');
const { getHomepage,getABC,getHoiDanIT,postCreateUser,getCreateUser } = require('../controllers/homeController');

const router=express.Router();


router.get('/',getHomepage);

router.get('/abc',getABC);


router.get('/hoidanit',getHoiDanIT);
router.post('/create-user',postCreateUser);
router.get('/create',getCreateUser);

module.exports = router;