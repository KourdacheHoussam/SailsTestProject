/**
* Notice.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* Cet objet modélise un avis sur la personne ou sur la soirée
*/

module.exports = {
	//Table name
	tableName : 'notices',
	//La liste des attributs
	attributes: {
		nui:{
			type	: 'integer',
			unique  : true,
			primaryKey  : true,
			required    : true,
			columnName : 'ntc_primary_k'
		},
		
	}
};

