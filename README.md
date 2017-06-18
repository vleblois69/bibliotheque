# bibliotheque
Tp noSQL 2017

Modélisation des données :
- Base "bibliotheque"
- Collection "livres" qui va contenir des documents JSON de la forme :
{
	"_id" : ObjectId("54f3b7c480beed8e67d55383"),
	"ISBN" : 9781306982351,
	"titre" : "Hamlet",
	"auteur" : "William Shakespeare",
	"dateAchat" : ISODate("2010-11-07T23:00:00Z"),
	"etat" : "Neuf",
	"theme" : "Tragedie"	
} 
- Collection "prets" qui va contenir des documents JSON de la forme :
{
	"dateDePret" : ISODate("2012-03-05T46:00:00Z"),
	"emprunteur" : "Jean DUPOND",
	"idLivre" : ObjectId("57t3b7c480bfvd8e29d50683"),
	"enCours" : true 
}
L'attribut "enCours" vaudra "false" quand l'emprunteur aura rendu le livre.

Le projet contient 3 répertoires correspondant aux 3 couches :
 > Répertoire "data" : c'est ici que sont stockées toutes les données de la base de données
 > Répertoire "scripts" : contient un script "accueil.js" permettant de lancer l'application et gérant toutes les règles métiers
 > Répertoire "views" : c'est ici que sont stockés les fichiers html. Il contient :
	- index.html : page d'accueil affichant la liste des livres et le formulaire de création
	- livre.html : page affichant les informations d'un seul livre

Pour fonctionner ce projet nécessite l'installation des outils suivants :
	- mongoDB, la base de données,
	- node.js, pour l'exécution du javascript
	- NPM pour installer les extensions nécessaires à savoir : pug, express, consolidate et mongodb (commande : npm install express consolidate pug mongodb)

Pour lancer le projet, lancer d'abord le serveur mongoDB puis executer le script "accueil.js" en tapant : node accueil.js

