const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
   },
   address: {
      type: String,
      required: true,
   },
   phoneNumber: {
      type: String,
      required: true,
   },
   toTal: {
      type: Number,
      required: true,
   },
   status: {
      type: String,
      required: true,
   },
   orderDate: {
      type: Date, 
      default: Date.now,
   },
   activatedVoucher: {
      type: Boolean,
      default: false,
   },
   idUser: {
      type: String,
      required: true,
   },
   idVoucher: {
      type: String,
      required: true,
   },
});

module.exports = mongoose.model("Order", OrderSchema);
