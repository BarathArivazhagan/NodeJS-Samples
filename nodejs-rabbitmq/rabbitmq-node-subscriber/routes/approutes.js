var express = require('express');
var router = express.Router();
var amqpConnection=require('../messaging/amqpconnection');

/* GET home page. */

router.get('/', function(req, res) {
	console.log("home is called");
	res.setHeader('Content-Type', 'application/json');
  res.write("Welcome to Node express Rabbit MQ application");
});

router.get('/send',function(req,res){
	console.log("send endpoint  is called");
	
	

	
});

module.exports = router;
