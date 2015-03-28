/**
* Address.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

//Address ibject model
module.exports = {
	//table name of the model
	tableName :'addresses',
	attributes: {
		//The address identifier
		aid:{
			type :'integer',
			unique   	: true,
			primaryKey  : true,
			required	: true,
			columnName  : 'address_primary_k'
		},
		//The street : rue, avenue ...Etc
		street_address:{
			type		:'string',
			size		: 100,
			columnName  :'street_address'
		},
		//Code postal
		cp_address:{
			type		: 'string',
			size		: 10,
			columnName  : 'cp_address'
		},
		//Ville
		town_address :{
			type 		: 'string',
			size		: 25,
			columnName	: 'town_address'
		}, 
		//Bat A, Etage 2 ...etc
		other_address_specifications :{
			type        : 'string',
			size		: 50,
			columnName  : 'o_specs_address'
		},
		//An address belong to one user.
		owner:{
			model : 'user'
		}
  	}
};

