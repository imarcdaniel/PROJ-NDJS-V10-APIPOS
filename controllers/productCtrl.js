const Product = require('../models/product.js')

module.exports = {
    getOne,

    
}

//GET PRODUCT
 async function getOne (req, res) {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};


