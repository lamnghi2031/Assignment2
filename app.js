const express = require('express');

const app = express();

const path = require('path');

const router = express.Router();

app.use(express.static(path.join(__dirname, '/controllers/public')));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/controllers/public/home.html'));
  //__dirname : It will resolve to your project folder.
});

const HomeController = require("./controllers/HomeController");
app.use("/home", HomeController);

const ProductController = require("./controllers/ProductController");
app.use("/product", ProductController);

const LoginController = require("./controllers/LoginController");
app.use("/login", LoginController);

const OrderController = require("./controllers/OrderController");
app.use("/order", OrderController);

const PaymentController = require("./controllers/PaymentController");
app.use("/payment", PaymentController);

const ReportController = require("./controllers/ReportController");
app.use("/report", ReportController);

// router.get('/logout',function(req,res){
//   res.sendFile(path.join(__dirname+'/logout.html'));
// });

// router.get('/profile',function(req,res){
//     res.sendFile(path.join(__dirname+'/profile.html'));
//   });

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');