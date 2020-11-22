import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../models/utilisateur.model';
import {UtilisateurService} from '../services/utilisateur.service';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

	utilisateurs : Utilisateur[];
  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit() {
  	this.utilisateurs = utilisateurService.getUtilisateurs();
  }

}
