//Debut des inclusions / import des modules

var express = require('express');
var cons = require('consolidate'); 
var MongoClient = require('mongodb').MongoClient;

//Fin des inclusions / import des modules

var app = express(); // Création du serveur express

app.engine('html',cons.pug);
app.set('view engine','html');
app.set('views', __dirname + '/../views');

app.listen(8000);
console.log("Serveur express démarré sur le port 8000!");

app.get('/books', function(req,res) //Fonction executée quand arrive sur la page localhost:8000, soit la racine
{
	var livre1 = {titre:"Halo",auteur:"Bungie",ISBN:1326497581236,dateAchat:"21/10/2016",etat:"Neuf",theme:"Science fiction"};
	var livre2 = {titre:"The Witcher",auteur:"Blabla",ISBN:9423167589462,dateAchat:"03/11/2014",etat:"Bon etat",theme:"Aventure"};
	var liste = [livre1,livre2];
	res.render("index",{'liste':liste});
});

