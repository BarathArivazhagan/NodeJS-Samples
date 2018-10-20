
var users=[];

var user1={
		name:"barath",
		password:"barath",
		contacts: [{ 
			contactName:"barath", 
			contactNumber: 9600162152, 
			emailId: "barath@gmail.com"
			}]
	};

var user2={
		name:"a",
		password:"a",
		contacts: null
	};

exports.getUserContacts = function(user){	
	return user.contacts;	
};


exports.getUser = function(userName){

for(var i=0;i<users.length;i++){
	if(users[i].name === userName){
		return users[i];
	}
}

};


exports.authenticateUser=function(userName,password){
	
	for(var i=0;i<users.length;i++){
		if(users[i].name === userName && users[i].password === password){
			console.log("valid user");
			return true;
		}
		
	}
	console.log("invalid user");
	return false;
};

users.push(user1);
users.push(user2);


exports.users=users;