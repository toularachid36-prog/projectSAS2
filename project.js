let prompt = require('prompt-sync')();
const candidats = [{
	cin: "AB123456", nom: "Boushaba", prenom: "Soufiane", partiPolitique: "PGD", age: 40, electeurs: ["PA261531"]
}
];
function ajouterCandidat(){
	console.log("Ajouter un Candidat :");
   let cin;
    while (true) {
        cin = prompt("Entrez Votre CIN :");
        const candidatExiste = candidats.find(
            candidat => candidat.cin === cin );
        if (candidatExiste) {
            console.log("Erreur : cette CIN existe déjà.");
            console.log("Veuillez entrer une autre CIN.");
        } else {
            break;}}
	let nom = prompt("Entrez Votre Nom :");
	let prenom = prompt("Entrez Votre Prenom :");
	let partiPolitique = prompt("Parti Politique OU Indépendant :");
	let age = +prompt("Entrez Votre Age :");
	const nouveaucandidat ={
    cin : cin, nom : nom, prenom: prenom, partiPolitique: partiPolitique, age : age, electeurs : []}
	candidats.push(nouveaucandidat);
	console.log("Candidat Ajouter Avec Succés");
}
function ajouterplufois(){
console.log("Ajouter Plusieur Candidats :");
const nombre = +prompt("Combien De Candidats Que Vous Voulez Ajouter :");
if (isNaN(nombre) || nombre<=0){
	console.log("Erreur : Nombre Invalide");
	return;}
for(let i = 0; i<nombre; i++){
	console.log("candidat" + (i + 1) + " : ");
    const cin = prompt("CIN :");
	const candidatExiste = candidats.find(
		candidat=>candidat.cin === cin);
		if (candidatExiste){console.log("Erreur : c'est cin existe déja.");
			i--;
			continue;}
	let nom = prompt("Entrez Votre Nom :");
	let prenom = prompt("Entrez Votre Prenom :");
	let partiPolitique = prompt("Parti Politique OU Indépendant :");
	let age = +prompt("Entrez Votre Age :");
	candidats.push({cin : cin, nom : nom, prenom: prenom, partiPolitique: partiPolitique, age : age, electeurs : []});
	console.log("Candidats Ajouter Avec Succés");
}
}
function afficherliste(){
	console.log("Liste Des Candidats");
	if (candidats.length===0){
		console.log("Aucun Candidat");
		return;}
	candidats.forEach((candidat, index)=>{
		console.log("Candidat"+ (index + 1) + ":");
		console.log("CIN :" + candidat.cin);
		console.log("NOM :" + candidat.nom);
		console.log("PRENOM :" + candidat.prenom);
		console.log("Parti Politique :" + candidat.partiPolitique);
		console.log("AGE :" + candidat.age);
		console.log("Nombre De Votes :" +candidat.electeurs.length);
	})
}
function afficherclassement(){
        console.log("---Classement Par Nombre Des Votes---");
		const Classement = [...candidats];
	    Classement.sort(function(a, b)
	    {return b.electeurs.length - a.electeurs.length;
        });
Classement.forEach(function(candidat, index) 
{ console.log("--- Candidat " + (index + 1) + " ---"); 
	console.log("CIN : " + candidat.cin); 
	console.log("NOM : " + candidat.nom); 
	console.log("PRENOM : " + candidat.prenom); 
	console.log("Parti Politique : " + candidat.partiPolitique); 
	console.log("AGE : " + candidat.age);
	console.log("Nombre De Votes : " + candidat.electeurs.length); }); 
}
function filtrercandidat (){
	console.log("Filtrer Par Parti Politique :");
	const parti = prompt("Entrez Le Parti Politique :");
	const resultat = candidats.filter(function(candidat){
    return candidat.partiPolitique.toLowerCase() === parti.toLowerCase()});
	if(resultat.length === 0){
			console.log("Aucun Candidat Trouve Pour Ce Parti");
			return;}
	console.log("----Candidat De Parti :" + parti);
	resultat.forEach((candidat, index)=>{
	console.log("Candidat " + (index + 1) + " : "); 
	console.log("CIN : " + candidat.cin); 
	console.log("NOM : " + candidat.nom); 
	console.log("PRENOM : " + candidat.prenom); 
	console.log("Parti Politique : " + candidat.partiPolitique); 
	console.log("AGE : " + candidat.age);
	console.log("Nombre De Votes : " + candidat.electeurs.length); }); 	
}

ajouterCandidat();
ajouterplufois();
afficherliste();
afficherclassement();
filtrercandidat();