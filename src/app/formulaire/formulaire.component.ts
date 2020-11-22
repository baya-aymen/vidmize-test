import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Region} from '../models/region.model';
import {RegionService} from '../services/regions.service';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

	regions : Region[];

  constructor(private regionService : RegionService) { }

  ngOnInit() {

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

  onSubmit(form: NgForm) {
    console.log(form.value);
    
}

}
