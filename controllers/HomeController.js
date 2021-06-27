var express = require('express');
var router = express.Router();

/////////// --- Khai báo các xử lý trong 1 Controller
router.get("/", getHome);

function getHome(req, res) {
    res.sendFile(__dirname + "/public/home.html");
}


/// --- EXports
module.exports = router;