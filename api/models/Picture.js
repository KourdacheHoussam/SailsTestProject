/**
* Picture.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	//Table name
	tableName	: 'pictures',
	//List of attributes
	attributes: {
		//The id of the pic
		picid:{
			type		: 'integer',	
			unique   	: true,
			primaryKey  : true,
			required	: true,
			columnName  : 'pic_primary_k'
		},
		//The user's picture description
		pic_description:{
			type	: 'string',
			required	: false,
			columnName	: 'pic_description'
		},
		//The relative address of the picture
		pic_address:{
			type		: 'string',
			required	: true,
			columnName	: 'pic_address'
		},
		//A picture belong to a defined user id
		owner:{
			model       : 'user'
		}
	}
};

