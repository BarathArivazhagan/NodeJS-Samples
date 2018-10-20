var amqp = require('amqplib/callback_api');
var config = require('../config/config');
var amqpContext = {

	amqpConn : null,
	
	amqpChannel: null,
	
	connect : function(){
		console.log("connecting to AMQP connection with url "+config.AMQP_URL);
		amqp.connect(config.AMQP_URL + "?heartbeat=60", function(err, conn) {
		    if (err) {
		      console.error("[AMQP]", err.message);
		      return ;
		    }
		    conn.on("error", function(err) {
		      if (err.message !== "Connection closing") {
		        console.error("[AMQP] conn error", err.message);
		      }
		    });
		    conn.on("close", function() {
		      console.error("[AMQP] reconnecting");
		      return ;
		    });
		    console.log("[AMQP] connected");
		    amqpContext.amqpConn = conn;
		    amqpContext.createChannel();
		  });
	},
	
	createChannel: function(){
		
				
		amqpContext.amqpConn.createConfirmChannel(function(err, ch) {
		    if (err) return;
		      ch.on("error", function(err) {
		      console.error("[AMQP] channel error", err.message);
		    });
		    ch.on("close", function() {
		      console.log("[AMQP] channel closed");
		    });
		    console.log("exchange name "+config.exchange_name+" queue name "+config.queue_name);
		    ch.assertExchange(config.exchange_name,'topic');
		    ch.assertQueue(config.queue_name);
		    ch.bindQueue(config.queue_name,config.exchange_name);
		  
		    amqpContext.amqpChannel = ch;		    
		  });
		
		
	},
	
	publishMessage: function(channel,exchange, routingKey, content) {
		  try {
			    
				  if(channel !=null){
					  channel.publish("", routingKey, content, { persistent: true },
					    			function(err, ok) {
					                        if (err) {
					                          console.error("[AMQP] publish", err);
					                          
					                          channel.connection.close();
					                        }
					                        if(ok){
					                        	console.log("[AMQP] message published ");
					                        }
					                      });
				  }
			  } catch (e) {
			    console.error("[AMQP] publish", e.message);
			    
			  }
	},
	
	getChannel : function(){
		
		console.log("getting the channel"+amqpContext.amqpChannel);
		return amqpContext.amqpChannel;
	}

	





};


amqpContext.connect();
module.exports=amqpContext;
