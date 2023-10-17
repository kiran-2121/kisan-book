const express =require('express');
const {getSellerRecords,addSeller} = require("../../controllers/seller/sellerController");
const {verifyToken} = require("../../middleware/userVerify")
const router = express.Router();

router.post('/addseller',verifyToken, addSeller);

router.get('/getsellers',getSellerRecords);


module.exports=router;