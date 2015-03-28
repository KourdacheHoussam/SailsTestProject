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
		user_name:{
			type	: 'string',
			unique	: true,
			columnName : 'username'
		},
		//Firstname
		first_name:{
			type	: 'string',
			size	: 25,
			columnName : 'firstname'
		},
		//Lastname
		last_name:{
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
		birth_day:{
			type	: 'date',
			columnName :'birthday'
		},
		//Address Mail
		mail_address:{
			type	: 'email',
			unique	: true,
			columnName : 'address_mail'
		},
		//physical address
		physical_address:{
			model   : 'address'
		},
		//User certified ?
		certified:{
			type		: 'boolean',
			columnName  : 'certified_user'
		},
		//Social Status : student ...
		social_status:{
			type	    : 'string',
			columnName  : 'socail_status'
		},
		number_parties:{
			type 		: 'integer',
			columnName	: 'number_parties'
		},
		//User hobbies
		hobbies:{
			collection	: 'hobbie',
			via         : 'owner',
			columnName  : 'user_hobbies'
		},
		// the list of user picture
		pictures:{
			collection	: 'picture',
			via         : 'pic_owner',
			columnName	: 'user_pictures'
		}
	}


};

