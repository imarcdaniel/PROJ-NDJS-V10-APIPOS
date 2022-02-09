const Order = require("../models/order");

module.exports = {
  newOrder,
  updateOrder,
  deleteOrder,
  orderByUser,
};

//CREATE
async function newOrder(req, res) {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
}

//UPDATE
async function updateOrder(req, res) {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
}

//DELETE
async function deleteOrder(req, res) {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Deletion confirmed...");
  } catch (err) {
    res.status(500).json(err);
  }
}

//GET USER ORDERS
async function orderByUser(req, res) {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
}
