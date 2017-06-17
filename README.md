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

