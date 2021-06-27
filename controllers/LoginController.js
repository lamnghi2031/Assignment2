var express = require('express');
var router = express.Router();

/////////// --- Khai báo các xử lý trong 1 Controller
router.get("/", getLogin);

function getLogin(req, res) {
    res.sendFile(__dirname + "/public/login.html");
}


/// --- EXports
module.exports = router;