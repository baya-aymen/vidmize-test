import { ViewChild,Component, OnInit,Input,OnDestroy } from '@angular/core';
import {Utilisateur} from '../models/utilisateur.model';
import {UtilisateurService} from '../services/utilisateur.service';
import { AgGridAngular } from "ag-grid-angular";
import { Subscription ,Observable } from 'rxjs';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit, OnDestroy  {

	@ViewChild('agGrid',{static: true}) agGrid: AgGridAngular;

	private eventsSubscription: Subscription;

	@Input() events: Observable<void>;

	utilisateurs : Utilisateur[];
	
	columnDefs = [
	    { field: 'nom', sortable: true, filter: true },
	    { field: 'prenom', sortable: true, filter: true },
	    { field: 'telephone', sortable: true, filter: true },
	    { field: 'region', sortable: true, filter: true }
	];
  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit() {
  	this.utilisateurs = this.utilisateurService.getUtilisateurs();
  	console.log(this.utilisateurs);
  	this.eventsSubscription = this.events.subscribe(() => this.onUpdateData());
  	
  }

  onUpdateData(){
  	this.utilisateurs = this.utilisateurService.getUtilisateurs();
  }

  // Suppression d'un utilisateur
  onDeleteRow (){	
  	var selectedData = this.agGrid.api.getSelectedRows();
  	if(selectedData[0]){
	  	this.utilisateurService.deleteUtilisateur(selectedData[0]);
	  	this.onUpdateData();
  	}
  }

   ngOnDestroy() {     
        this.eventsSubscription.unsubscribe();
    }


}
