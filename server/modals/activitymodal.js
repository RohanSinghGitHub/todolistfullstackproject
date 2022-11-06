const mongoose = require("mongoose");

const activity = new mongoose.Schema({
        activityname: { type: String, required: true },
        activitystatus: { type: String, required: false, default: "pending" },
        activitytime: { type: String, required: false, default: "00:00:00" },
        activityaction: { type: String, required: false, default: "start" }
});

const activityModal = mongoose.model("activityadd", activity);
module.exports = activityModal;