var express = require('express');
var router = express.Router();
var amqpContext=require('../messaging/amqpconnection');
var config = require('../config/config');

/* GET home page. */

router.get('/', function(req, res) {
	console.log("home is called");
	res.setHeader('Content-Type', 'application/json');
  res.write("Welcome to Node express Rabbit MQ application");
});

router.get('/send',function(req,res){
	console.log("send endpoint  is called");
	var channel=amqpContext.getChannel();
	amqpContext.publishMessage(channel,config.exchange_name,config.queue_name,new Buffer("hello"))
	

	
});

module.exports = router;
