const express = require('express');
const { getHomepage,getABC,getHoiDanIT,postCreateUser,getCreateUser,getUpdateUser ,postUpdateUser,postDeleteUser,postRemoveUser} = require('../controllers/homeController');

const router=express.Router();


router.get('/',getHomepage);

router.get('/abc',getABC);


router.get('/hoidanit',getHoiDanIT);
router.post('/create-user',postCreateUser);
router.get('/create',getCreateUser);
router.get('/edit/:id',getUpdateUser);
router.post('/update-user',postUpdateUser);

router.post('/delete-user/:id',postDeleteUser);

router.post('/delete-user',postRemoveUser);
module.exports = router;