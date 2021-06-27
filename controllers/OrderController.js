var express = require('express');
var router = express.Router();

/////////// --- Khai báo các xử lý trong 1 Controller
router.get("/", getOrder);

function getOrder(req, res) {
    res.sendFile(__dirname + "/public/order.html");
}


/// --- EXports
module.exports = router;