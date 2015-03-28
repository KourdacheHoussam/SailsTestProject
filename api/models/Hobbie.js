/**
* Hobbie.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	//table name
	tableName : 'user_hobbies',
	//Hobbie model object
	attributes: {		
		//hobbie id record
		hui :{
			type	    : 'string',
			unique		: true,
			primaryKey  : true,
			required    : true,
			columnName : 'h_primary_k'
		},
		//The hobbie name
		name:{
			type	: 'string',
			size	: 25,
			columnName : 'hobbie_name'
		},
		// The description of user hobbies
		description:{
			type	: 'string',
			size	: 120,
			columnName	: 'hobbie_description'
		},
		// A hobbie belong to a user
		owner:{
			model   : 'user'
		}
	}
};

