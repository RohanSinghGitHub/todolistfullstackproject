const signupModal = require('./modals/signupmodal');
const bycrypt = require("bcryptjs");
const usercheck = async (username) => {

        let x = false;
        await signupModal.find({ username: username }).then((e) => {
                if (e.length) {
                        x = true;
                }
        })
        return x;
}

const hashgeneration = (password) => {
        const salt = 10;
        return new Promise((resolve, reject) => {
                bycrypt.genSalt(salt).then((hashSalt) => {
                        bycrypt.hash(password, hashSalt).then((passwordHash) => {
                                resolve(passwordHash)
                        })
                })
        })
}
module.exports = { usercheck, hashgeneration }