
const router = require("express").Router();
const cartCtrl = require("../controllers/cartCtrl.js");

//CREATE

router.post("/", cartCtrl.nwCart)

//UPDATE
router.put("/:id", cartCtrl.updateCart)


//DELETE
router.delete("/:id", cartCtrl.deleteCart)

//GET USER CART
router.get("/find/:userId", cartCtrl.getUserCart) 



module.exports = router;
