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
		name:{
			type	: 'string',
			size	: 25,
			columnName : 'hobbie_name'
		},
		owner:{
			model   : 'user'
		}
	}
};

