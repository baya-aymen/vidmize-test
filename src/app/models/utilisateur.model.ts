// les données sont des personnes et j'ai choisi de les appeler Utilisateur
export class Utilisateur{
	nom: string;
	prenom : string;
	telephone : string;
	// je prends que le nom de la région
	region : string


	constructor(user){
		this.nom = user.nom;
		this.prenom = user.prenom;
		this.telephone = user.telephone;
		this.region = user.region;
	}

}