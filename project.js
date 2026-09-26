let prompt = require('prompt-sync')();
const candidats = [{
	cin: "AB123456", nom: "Boushaba", prenom: "Soufiane", partiPolitique: "PGD", age: 40, electeurs: ["PA261531"]}
];
function ajouterCandidat() {
	console.log("Ajouter un Candidat :");
	let cin;
	while (true) {  
		cin = prompt("Entrez Votre CIN :");
		const candidatExiste = candidats.find(
			candidat => candidat.cin === cin);
		if (candidatExiste) {
			console.log("Erreur : cette CIN existe déjà.");
			console.log("Veuillez entrer une autre CIN.");
		} else {
			break;}}
	let nom = prompt("Entrez Votre Nom :");
	let prenom = prompt("Entrez Votre Prenom :");
	let partiPolitique = prompt("Parti Politique OU Indépendant :");
	let age = +prompt("Entrez Votre Age :");
	if (age < 18) {
		console.log("Erreur :T'es Pas Un Adulte");
		return;}
	const nouveaucandidat = {
		cin: cin, nom: nom, prenom: prenom, partiPolitique: partiPolitique, age: age, electeurs: []}
	candidats.push(nouveaucandidat);
	console.log("Candidat Ajouter Avec Succés");
}
function ajouterplufois() {
	console.log("Ajouter Plusieur Candidats :");
	const nombre = +prompt("Combien De Candidats Que Vous Voulez Ajouter :");
	if (isNaN(nombre) || nombre <= 0) {
		console.log("Erreur : Nombre Invalide");
		return;}
	for (let i = 0; i < nombre; i++) {
		console.log("candidat" + (i + 1) + " : ");
		const cin = prompt("CIN :");
		const candidatExiste = candidats.find(
			candidat => candidat.cin === cin);
		if (candidatExiste) {
			console.log("Erreur : c'est cin existe déja.");
			i--;
			continue;}
		let nom = prompt("Entrez Votre Nom :");
		let prenom = prompt("Entrez Votre Prenom :");
		let partiPolitique = prompt("Parti Politique OU Indépendant :");
		let age = +prompt("Entrez Votre Age :");
		candidats.push({ cin: cin, nom: nom, prenom: prenom, partiPolitique: partiPolitique, age: age, electeurs: [] });
		console.log("Candidats Ajouter Avec Succés");}
}
function afficherliste() {
	console.log("Liste Des Candidats");
	if (candidats.length === 0) {
		console.log("Aucun Candidat");
		return;
	}
	candidats.forEach((candidat, index) => {
		console.log("Candidat" + (index + 1) + ":");
		console.log("CIN :" + candidat.cin);
		console.log("NOM :" + candidat.nom);
		console.log("PRENOM :" + candidat.prenom);
		console.log("Parti Politique :" + candidat.partiPolitique);
		console.log("AGE :" + candidat.age);
		console.log("Nombre De Votes :" + candidat.electeurs.length);
	})
}
function afficherclassement() {
	console.log("Classement Par Nombre Des Votes :");
	const Classement = [...candidats];
	Classement.sort(function (a, b) {
		return b.electeurs.length - a.electeurs.length;});
	Classement.forEach(function (candidat, index) {
		console.log("--- Candidat " + (index + 1) + " ---");
		console.log("CIN : " + candidat.cin);
		console.log("NOM : " + candidat.nom);
		console.log("PRENOM : " + candidat.prenom);
		console.log("Parti Politique : " + candidat.partiPolitique);
		console.log("AGE : " + candidat.age);
		console.log("Nombre De Votes : " + candidat.electeurs.length);});
}
function filtrercandidat() {
	console.log("Filtrer Par Parti Politique :");
	const parti = prompt("Entrez Le Parti Politique :");
	const resultat = candidats.filter(function (candidat) {
		return candidat.partiPolitique.toLowerCase() === parti.toLowerCase()});
	if (resultat.length === 0) {
		console.log("Aucun Candidat Trouve Pour Ce Parti");
		return;}
	console.log("Candidat De Parti :" + parti);
	resultat.forEach((candidat, index) => {
		console.log("Candidat " + (index + 1) + " : ");
		console.log("CIN : " + candidat.cin);
		console.log("NOM : " + candidat.nom);
		console.log("PRENOM : " + candidat.prenom);
		console.log("Parti Politique : " + candidat.partiPolitique);
		console.log("AGE : " + candidat.age);
		console.log("Nombre De Votes : " + candidat.electeurs.length);});
}
function voterpour() {
	console.log("Voter Pour Un Candidat :");
	const cinElecteur = prompt("Entrez Votre CIN :");
	for (let i = 0; i < candidats.length; i++) {
		if (candidats[i] && candidats[i].electeurs.includes(cinElecteur)) {
			console.log("Vous Aves Deja Voté !!");
			return;}}
	const cincandidat = prompt("Entrez La Cin De Candidat Lequel Vous Voulez Voter :");
	let candidat = candidats.find(function (candidat) {
		return candidat.cin === cincandidat;});
	if (!candidat) {
		console.log("Candidat Introuvable !");
		return;}
	candidat.electeurs.push(cinElecteur);
	console.log("Votre Vote Enregistré Avec Succés");
}
function modifier() {
	console.log("Modifier Les Informations D'un Candidat :");
	let cin = prompt("Entrez Votre CIN :");
	let candidat = candidats.find(function (candidat) {
		return candidat.cin === cin;});
	if (!candidat) {
		console.log("Candidat Introuvable !");
		return;}
	console.log("1 : Modifier le parti politique d'un candidat.");
	console.log("2 : Modifier l'âge d'un candidat.");
	let choix = +prompt("Entrez Votre Choix :");
	if (choix === 1) {
		let nouveauParti = prompt("Entrez Un Nouveau Parti Politque :");
		candidat.partiPolitique = nouveauParti;
		console.log("Parti Politique Modifié .");}
	else if (choix === 2) {
		let nouvelAge = +prompt("Entrez La Nouvel Age :");
		if (isNaN(nouvelAge) || nouvelAge < 18) {
			console.log("Age Invalide !!");
			return;}
		candidat.age = nouvelAge;
		console.log("Age Modifié");}
	else {console.log("Choix Invalide");}
}
function supprimeruncandidat(){
 console.log("Supprime Un Candidat :");
 let cin = prompt("CIN De Candidat A Supprimer :");
 let index = candidats.findIndex(function(candidat){
	return candidat.cin === cin;
 });
 if(index === -1){
	console.log("Aucun Candidat Trouvé");
	return;
 }
 candidats.splice(index, 1);
 console.log("Candidat Supprimé Avec Succes");
}
function rechercheuncandidat(){
 console.log("Recherche Un Candidat :");
 let nom = prompt("Entrez Le Nom A recherché :");
 let resultat = candidats.find(function(candidat){
	return candidat.nom.toLowerCase() === nom.toLowerCase();
 });
 if(!resultat){
	console.log("Aucun Candidat Trouvé");
	return;}
    console.log("Candidat Trouvé :");
	console.log("CIN :" + resultat.cin);
	console.log("NOM :" + resultat.nom);
	console.log("PRENOM :" + resultat.prenom);
	console.log("Parti Politique :" + resultat.partiPolitique);
	console.log("AGE :" + resultat.age);
	console.log("Nombre De Votes :" + resultat.electeurs.length);
}
ajouterCandidat();
ajouterplufois();
afficherliste();
afficherclassement();
filtrercandidat();
voterpour();
modifier();
supprimeruncandidat();
rechercheuncandidat();