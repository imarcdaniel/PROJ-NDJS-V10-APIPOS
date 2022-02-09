const router = require("express").Router();
const productsCtrl = require('../controllers/productCtrl.js')
const Product = require("../models/product.js");


//GET PRODUCT
router.get("/find/:id", productsCtrl.getOne);

// //GET ALL PRODUCTS
// router.get("/", productsCtrl.index);  
router.post("/",  async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
