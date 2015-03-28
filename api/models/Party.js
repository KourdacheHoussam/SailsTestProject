/**
* Party.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

//A party object Model
module.exports = {
	//Table name
	tableName	:'parties'
	attributes: {
		//The id of the object
		pid:{
			type		: 'integer',	
			unique   	: true,
			primaryKey  : true,
			required	: true,
			columnName  : 'party_primary_k'
		},
		//Type de soirée
		type:{
			type	:'string',
			enum	:['Poker', 'Dance', 'Domino']
		},
		//Modalité soirée : soirée ouverte, soirée sur confirmation
		party_modality:{
			type    :'string',
			enum 	:['Open', 'With-Confirmation']
		},
		
	}
};

