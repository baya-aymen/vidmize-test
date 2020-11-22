import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import {Utilisateur} from '../models/utilisateur.model';

@Injectable({
  providedIn: 'root'
})

export class UtilisateurService {
  
  utilisateurs : Utilisateur[];
  constructor() { 
  }

  fetchDonnees(){
  	if(localStorage.getItem('utilisateurs')){
  	let users = JSON.parse(localStorage.getItem('utilisateurs'));
    this.utilisateurs = users
    .sort((item1:Utilisateur,item2:Utilisateur) => (item1.nom > item2.nom ? 1 : -1));
  	}
    console.log(this.utilisateurs);
  }
  
  getUtilisateurs(){
    this.fetchDonnees();
  	return this.utilisateurs;
  }

  addUtilisateur(user){
    this.fetchDonnees();
  	if(this.utilisateurs){
      let item = this.utilisateurs.find(item => (((item.nom === user.nom)&&(item.prenom === user.prenom))||(item.telephone === user.telephone)));
      
      if(item){ return 'error';}
      
      this.utilisateurs.push(user);
  		
  	}else{
  		this.utilisateurs = [user];
  	}
  	localStorage.setItem('utilisateurs',JSON.stringify(this.utilisateurs));
    this.fetchDonnees();
    return 'success';
  }

  deleteUtilisateur(user){
    this.utilisateurs.splice(this.utilisateurs.indexOf(user), 1);
    console.log (this.utilisateurs);
    localStorage.setItem('utilisateurs',JSON.stringify(this.utilisateurs));
    this.fetchDonnees();

  }

 
}