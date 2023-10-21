const express =require('express');
const {getSellerRecords,addSeller, deleteSeller,getRecordForUpdate} = require("../../controllers/seller/sellerController");
const {verifyToken} = require("../../middleware/userVerify")
const {sellerRecordValid} = require("../../middleware/seller/sellerValid")
const router = express.Router();

router.post('/addseller',verifyToken,sellerRecordValid, addSeller);

router.get('/getsellers',getSellerRecords);

router.delete('/deleteSeller',deleteSeller);

router.get('/getseller',getRecordForUpdate);




module.exports=router;