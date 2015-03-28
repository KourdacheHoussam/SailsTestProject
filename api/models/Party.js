/**
* Party.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

//A party object Model
module.exports = {
	//Table name
	tableName	:'parties',
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
			type	: 'string',
			enum	: ['Poker', 'Dansante', 'Domino', 'Belote', 'Jeux de cartes', 'Apéro', 
					  'Jeux vidéos', 'CineHome', 'Barbecue'],			
			columnName  : 'party_type'
		},
		//Modalité soirée : soirée ouverte, soirée sur confirmation
		party_modality:{
			type    	:'string',
			enum 		: ['Open', 'With-Confirmation'],	
			required 	: true ,		
			columnName  : 'party_modality'
		},
		//The address of the party
		party_address:{
			model 		:'address',
			required	: true,
			columnName  : 'address_party'
		},
		//Le nombre minimum de participants
		minimal_participants:{
			type 	 	:'integer',
			required 	: true,
			columnName  : 'mini_participants'
		},
		//Le nombre maximal de participants
		maximal_participants:{
			type     	: 'integer',
			required 	: true,
			columnName  : 'maxi_participants'
		},
		//Ce que doivent apporter les gens à la soirée
		gifts:{
			type 		: 'string',
			size        : 120,		
			columnName  : 'party_gifts'
		},
		// Date and time party start
		datetime_start :{
			type  		: 'datetime',
			required 	: true,
			columnName  : 'datetime_start'
		},
		// Date and time party end
		datetime_end :{
			type 		: 'datetime',
			required	: true,
			columnName  : 'datetime_end'
		},
		// party type of place
		place_type :{
			type        : 'string',
			required	: false,
			enum 		: ['studio','studio étudiant', 'appartement', 'maison', 'loft', 'chateau'],
			columnName  : 'party_place_type'
		},
		//Les commentaire de l'organisateur de la soirée
		organisator_comments: {
			type 		: 'string',
			size 		: 240,
			required  	: true,
			columnName	: 'organisator_comments'
		},
		//La liste des participants
		list_participants : {
			collection    : 'user',
			via           : 'belong_parties'
		},
		//List of notices: persons who want give his notice about the party
		list_notices	:{
			collection 	  : 'notice'
		}
	}
};