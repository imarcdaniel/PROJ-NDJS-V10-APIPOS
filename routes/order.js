const router = require("express").Router();
const orderCtrl = require("../controllers/orderCtrl.js");



//CREATE

router.post("/", orderCtrl.newOrder)


//UPDATE
router.put("/:id", orderCtrl.updateOrder)


//DELETE
router.delete("/:id", orderCtrl.deleteOrder )

//GET USER ORDERS
router.get("/find/:userId", orderCtrl.orderByUser)


module.exports = router;