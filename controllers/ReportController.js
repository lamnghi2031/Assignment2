var express = require('express');
var router = express.Router();

/////////// --- Khai báo các xử lý trong 1 Controller
router.get("/", getReport);

function getReport(req, res) {
    res.sendFile(__dirname + "/public/report.html");
}


/// --- EXports
module.exports = router;