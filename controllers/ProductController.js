var express = require('express');
var router = express.Router();

/////////// --- Khai báo các xử lý trong 1 Controller
router.get("/", getProduct);

function getProduct(req, res) {
    res.sendFile(__dirname + "/public/product.html");
}

//New
router.get("/new", getNewProduct);

function getNewProduct(req, res) {
    res.sendFile(__dirname + "/public/addproduct.html");
}


//Delete
router.delete("/:id", deleteProduct);

function deleteProduct(req, res) {
    res.sendFile(__dirname + "/public/product.html");
}

/// --- EXports
module.exports = router;