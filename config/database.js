const mongoose = require("mongoose");


//connect to mongodb

mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("connected", function () {
  console.log(`connected to MongoDB at ${db.host}: ${db.port}`);
});
