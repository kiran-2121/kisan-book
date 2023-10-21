const { Seller } = require("../../models/seller/sellerModel");


const addSeller = async (req,res) =>{
    const id = req.user.id;

    const seller = new Seller({
        buyerId:id,
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        primaryMobileNumber:req.body.primaryMobileNumber,
        secondaryMobileNumber:req.body.secondaryMobileNumber,

        address:{
            address1:req.body.address1,
            location:req.body.location,
            city:req.body.city,
            state:req.body.state,
            country:req.body.country,
            pinCode:req.body.pinCode

        }
        
      });
      const isSellerExist = await Seller.findOne({ primaryMobileNumber: seller.primaryMobileNumber });

      if (isSellerExist) {
        return res.status(400).json({ error: "Seller is already present" });
      }
    

      seller.save((err)=>{
        if(err){
            return res.status(500).send(err);
        }
        else{
            res.status(201).json({seller});
        }
      })

}





// const getSellerRecords = async (req, res) => {

//   const userId = req.query.userId;
//   const pageSize=req.query.pageSize ? parseInt(req.query.pageSize) :0;
//   const page=req.query.page ?  parseInt(req.query.pageSize) :0;

//   const sellers = await Seller.find({
//     $or: [
//       {
//         brokerId: {
//           $in: userId,
//         },
//       },

//       {
//         buyerId: {
//           $in: userId,
//         },
//       },
//     ],
//   })
//   .limit(pageSize).skip(pageSize * page);

//   res.status(200).json({sellers});
// };



const getSellerRecords = async (req, res) => {
  const userId=req.query.userId;
  const page = parseInt(req.query.page) ; 
  const limit = parseInt(req.query.limit) ; 

  const numberOfRecordToSkip = (page - 1) * limit;

    const sellers = await Seller.find({
      $or: [
        {
          brokerId: {
            $in: userId,
          },
        },
  
        {
          buyerId: {
            $in: userId,
          },
        },
      ],
    }).skip(numberOfRecordToSkip).limit(limit);
    res.json(sellers);
  
};

const deleteSeller = async (req, res) => {
  const id = req.query.sellerId;
  console.log(id);

  const seller = await Seller.findOne({ _id: id });
  console.log(seller);

  if (!seller) {
    return res.status(400).json({ message: "User not found" });
  }

  await Seller.deleteOne({ _id: seller._id });


  res.status(200).json({ message: "Deleted Successfully" });
};

const getRecordForUpdate = async (req, res) => {
  const id = req.query.sellerId;
  console.log(id);

  const seller = await Seller.findOne({ _id: id });
  console.log(seller);

  if (!seller) {
    return res.status(400).json({ message: "User not found" });
  }


  res.status(200).json(seller );
};




module.exports = { getSellerRecords,addSeller,deleteSeller,getRecordForUpdate };

