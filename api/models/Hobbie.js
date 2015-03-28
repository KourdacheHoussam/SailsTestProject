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
		// User can select his hobbies whithin this enumeration
		hobbies_enum:{
			type	: 'string',
			enum    : ['Football', 'Basket Ball', 'Dance', 'Musique', 'Jeux de cartes', 
			'Photographie', 'Ski', 'Cuisine', 'Jeux Vidéos', 'Musculation', 'Jeux Musicaux', 'Lecture', 'Dessin',
			'Tennis Table', 'Graffiti', 'Chasse', 'Jogging', 'Paintball', 'Rugby', 'Shopping', 'La nage', 'Skateboarding',
			'Badminton', 'Vélo','Blogging', 'Bowling', 'Jeux échecs', 'Théatre', 'Kayak', 'Arts martiaux', 'Tennis','Cinéma', 'Geeking']
		},
		// A hobbie belong to a user
		owner:{
			model   : 'user'
		}
	}
};

