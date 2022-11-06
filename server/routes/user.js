const express = require('express');
const signupModal = require('../modals/signupmodal');
const { usercheck, hashgeneration } = require('../encryption');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post("/login", (req, res) => {
        signupModal.find({ username: req.body.username }).then((data) => {
                if (data.length) {
                        bycrypt.compare(req.body.password, data[0].password).then((val) => {
                                if (val) {
                                        const authToken = jwt.sign(data[0].username, process.env.SECRET_KEY);
                                        res.status(200).send(authToken)
                                }
                                else {
                                        res.status(400).send("invalid password")
                                }
                        })
                }
                else {
                        res.status(401).send("unauthorised user");
                }
        })
})


router.post("/signup", async (req, res) => {
        if (await usercheck(req.body.username)) {
                res.status(402).send("user already registered");
        }
        else {
                hashgeneration(req.body.password).then((hashpassword) => {
                        signupModal.create({ username: req.body.username, password: hashpassword, cnfpassword: hashpassword }).then(() => {
                                res.status(200).send(req.body.username);
                        }).catch((err) => {
                                res.status(404).send(err)
                        })
                })

        }
})

router.post("/logout", (req, res) => {
        res.send(200);
})
module.exports = router;