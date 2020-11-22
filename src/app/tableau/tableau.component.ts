import { ViewChild,Component, OnInit } from '@angular/core';
import {Utilisateur} from '../models/utilisateur.model';
import {UtilisateurService} from '../services/utilisateur.service';
import { AgGridAngular } from "ag-grid-angular";

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
	@ViewChild('agGrid') agGrid: AgGridAngular;

	utilisateurs : Utilisateur[];
	
	columnDefs = [
	    { field: 'nom', sortable: true, filter: true },
	    { field: 'prenom', sortable: true, filter: true },
	    { field: 'telephone', sortable: true, filter: true },
	    { field: 'region', sortable: true, filter: true },
	];
  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit() {
  	this.utilisateurs = this.utilisateurService.getUtilisateurs();
  	console.log(this.utilisateurs);
  	
  }

  onUpdateData(){
  	this.utilisateurs = this.utilisateurService.getUtilisateurs();
  	this.agGrid.api.updateRowData();
  }

  onDeleteRow (){	
  	var selectedData = this.agGrid.api.getSelectedRows();
  	if(selectedData[0]){
	  	this.utilisateurService.deleteUtilisateur(selectedData[0]);
	  	this.agGrid.api.updateRowData({ remove: selectedData });
  	}
  }


}
