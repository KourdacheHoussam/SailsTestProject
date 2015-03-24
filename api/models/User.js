/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

/**
*
* This model describe the User Entity and all his attributes, such as :
* - Username
* - UserFirstName
* - UserLastName
* - UserAddress
* - UserMail
*/
module.exports = {
	//table name
	tableName : 'users',
	//List of attributes
	attributes: {
		//The user id: record identifier
		uid:{
			type		: 'integer',	
			unique   	: true,
			primaryKey  : true,
			required	: true,
			columnName  : 'u_primary_k'
		},
		//Username
		userName:{
			type	: 'string',
			unique	: true,
			columnName : 'username'
		},
		//Firstname
		firstName:{
			type	: 'string',
			size	: 25,
			columnName : 'firstname'
		},
		//Lastname
		lastName:{
			type	: 'string',
			size	: 25,
			columnName : 'lastname'
		},
		//Password
		password:{
			type	: 'string',
			columnName : 'encrypt_password'
		},
		//birthDay
		birthDay:{
			type	: 'date',
			columnName :'birthday'
		},
		//Address Mail
		addressMail:{
			type	: 'email',
			unique	: true,
			columnName : 'address_mail'
		},
		//User certified ?
		certified:{
			type	: 'boolean',
			columnName : 'certified_user'
		},
		//Social Status : student ...
		socialStatus:{
			type	: 'string',
			columnName : 'socail_status'
		},
		//User hobbies
		hobbies:{
			collection	: 'hobbie',
			via         : 'owner',
			columnName  : 'user_hobbies'
		}
	}


};

