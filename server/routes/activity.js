const express = require('express');
const activityModal = require('../modals/activitymodal');

const router = express.Router();

router.post("/addactivity", (req, res) => {
        activityModal.create({ activityname: req.body.activityname, activitystatus: req.body.activitystatus, activitytime: req.body.activitytime, activityaction: req.body.activityaction }).then(() => {
                res.status(200).send(req.body.activityname);
        })
})
router.get("/getactivity", (req, res) => {
        activityModal.find()
                .then(result => {
                        res.status(200).json({
                                activitydata: result
                        });
                }).catch((err) => {
                        console.log(err)
                })
})

module.exports = router;