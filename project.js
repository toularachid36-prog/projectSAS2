const candidats = [{
	cin : "AB123456",nom : "Boushaba", prenom : "Soufiane", partiPolitique : "Indépendant", age: 40, electeurs: []}
];
const newcandidats = [
	{cin :"PA183456", nom :"Ohssaine", prenom :"Abde Errahmane", partiPolitique :"Indépendant", age : 26, electeurs: []},
    {cin :"MA343678", nom :"El Bennar", prenom :"mohammed",partiPolitique :"Indépendant", age : 27, electeurs: []}
]
candidats.push(...newcandidats);
console.log(candidats);