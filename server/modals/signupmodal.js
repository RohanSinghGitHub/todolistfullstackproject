const mongoose = require("mongoose");

const signup = new mongoose.Schema({
        username: { type: String, required: true },
        password: { type: String, required: true, minLength: 8 },
        cnfpassword: { type: String, required: true, minLength: 8 },
});

const signupModal = mongoose.model("usersignup", signup);
module.exports = signupModal;