

var path = require('path');
var users = require('../js/user');
var contacts = require('../js/contacts');
var activeUser;

exports.home = function(req, res){
	console.log("home is called");
	console.log("Path is "+path);
	res.sendfile('./views/login.html');
};

exports.login = function(req, res){
	console.log("login is called");
	console.log("user name  is "+req.body.userName+" password "+req.body.password);
	console.log(" users "+users);
	var userName=req.body.userName;
	var password=req.body.password;
	var authenticated=users.authenticateUser(userName,password);
	if(authenticated){
		activeUser=users.getUser(userName);
		res.sendfile('./views/welcome.html');
	}else{
		res.sendfile('./views/failedlogin.html');
	}
};

exports.getActiveUser= function(){
	console.log("Get Active User "+activeUser);
	return activeUser;
};

exports.getActiveUserName= function(){
	console.log("Get Active User Name is called");
	var userName=exports.getActiveUser().name;
	console.log("Active user name "+userName);
	return userName;
};
exports.getContacts = function(req,res){
	console.log("getContacts is called");	
	res.setHeader('Content-Type', 'application/json');
	var userName=req.param.userName;
	if(userName === null || userName === undefined){
		userName=exports.getActiveUser().name;
	}
	console.log("Active userName "+userName);
	 var user= users.getUser(userName);
	 var contacts= users.getUserContacts(user);
	 console.log("user name is "+userName);	
	 console.log("contacts "+contacts);
	 res.send(JSON.stringify(user));
	
};


exports.addContactHtml = function(req, res){
	console.log("addContactHtml is called");	
	res.sendfile('./views/addContact.html');
};
