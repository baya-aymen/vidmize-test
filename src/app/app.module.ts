import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { RegionService } from './services/regions.service';
import {UtilisateurService} from './services/utilisateur.service';
import { TableauComponent } from './tableau/tableau.component';


@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    TableauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    RegionService,
    UtilisateurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
