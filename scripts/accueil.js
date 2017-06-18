//Debut des inclusions / import des modules

var express = require('express');
var cons = require('consolidate'); 
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

//Fin des inclusions / import des modules

var app = express(); // Création du serveur express
app.use(bodyParser())

var listeLivres; //Tableau qui va contenir tous les livres

app.engine('html',cons.pug);
app.set('view engine','html');
app.set('views', __dirname + '/../views');

app.get('/books', function(req,res) //Fonction executée quand arrive sur la page localhost:8000, soit la racine
{
	app.db.collection("livres").find().toArray(function(err, result)
	{
		if (err) throw err;
		
		listeLivres = Array.from(result);
	});
	res.render("index",{'liste':listeLivres});
});

app.post('/books/new', function(req,res,next) //Fonction executée quand l'utilisateur appuye sur le bouton du formulaire de création
{
	var livre = {'ISBN': req.body.isbn, 'titre': req.body.titre, 'auteur': req.body.auteur, 'dateAchat': req.body.dateAchat, 'etat': req.body.etat, 'theme': req.body.theme}; //Un instancie un objet avec en passant aux attributs les valeurs des champs
	app.db.collection("livres").insert(livre, null, function(error, result){
		if (error) throw error;
		
		console.log("Le livre a bien été ajouté !");
		listeLivres.push(livre);//On ajoute le livre créé dans la liste
		res.render("index",{'liste':listeLivres});
	});
});

MongoClient.connect('mongodb://127.0.0.1/bibliotheque', function(error, db)// Connection à la BD mongo et association a l'application
{
	if (error) throw error;
	app.db = db;
	app.listen(8000);
	console.log("Serveur express démarré sur le port 8000!");
});


