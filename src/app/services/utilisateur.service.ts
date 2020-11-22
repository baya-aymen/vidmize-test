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
    this.utilisateurs = users.map(
      (item: any) => new Utilisateur(item))
    .sort((item1:any,item2:any) => (item1.nom > item2.nom ? 1 : -1));
  	}
    console.log(this.utilisateurs);
  }
  
  getUtilisateurs(){
  	return this.utilisateurs.sort((item1:any,item2:any) => (item1.nom > item2.nom ? 1 : -1));
  }

  addUtilisateur(user){
  	if(this.utilisateurs){
  		this.utilisateurs.push(user);
  	}else{
  		this.utilisateurs = [user];
  	}
  	localStorage.setItem('utilisateurs',JSON.stringify(this.utilisateurs));
    this.fetchDonnees();
  }

 
}