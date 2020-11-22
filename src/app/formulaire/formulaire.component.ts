import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Region} from '../models/region.model';
import {RegionService} from '../services/regions.service';
import {Utilisateur} from '../models/utilisateur.model';
import {UtilisateurService} from '../services/utilisateur.service';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

	regions : Region[];
	erreur : boolean;
	creer : boolean;
  constructor(private regionService : RegionService, private utilisateurService: UtilisateurService) { }

  ngOnInit() {
  	this.erreur = false;
  	this.creer = false;
  	// récupération de la liste des regions dés la création du component
  	 this.regionService.getRegions().subscribe(
        (response) => {
          console.log(response);
          this.regions = response;
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
// on creer un Utilisateur et on envoie au service
  onSubmit(form: NgForm) {
    console.log(form.value);
    let newUser = new Utilisateur(form.value);
    let reponse = this.utilisateurService.addUtilisateur(newUser);
    if(reponse === 'error'){
    	this.erreur = true;
    	this.creer = false;
    }else{
    	this.erreur = false;
    	this.creer = true;
    }
    
}

}
