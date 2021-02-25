const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({});

module.exports =
  mongoose.models.Device || mongoose.model("Devices", DeviceSchema);
