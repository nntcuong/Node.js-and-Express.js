const express = require('express');
const { getHomepage,getABC,getHoiDanIT,postCreateUser,getCreateUser,getUpdateUser } = require('../controllers/homeController');

const router=express.Router();


router.get('/',getHomepage);

router.get('/abc',getABC);


router.get('/hoidanit',getHoiDanIT);
router.post('/create-user',postCreateUser);
router.get('/create',getCreateUser);
router.get('/edit/:id',getUpdateUser);
module.exports = router;