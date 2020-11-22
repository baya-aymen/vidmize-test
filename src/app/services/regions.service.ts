import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Region} from '../models/region.model';
import {Observable, of} from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class RegionService {
  
  constructor(private httpClient: HttpClient) { 
  }


  getRegions():Observable<Array<Region>>{
  	// requeter l'api et mapper les la réponse pour creer un array de Regions
  	return this.httpClient
      .get<Region[]>('https://geo.api.gouv.fr/regions')
      .pipe(
        map((data: any[]) =>
          data.map(
            (item: any) =>
              new Region(item)
          )
        ));
      

  }
}