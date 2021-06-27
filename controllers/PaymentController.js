var express = require('express');
var router = express.Router();

/////////// --- Khai báo các xử lý trong 1 Controller
router.get("/", getPayment);

function getPayment(req, res) {
    res.sendFile(__dirname + "/public/payment.html");
}

/// --- EXports
module.exports = router;