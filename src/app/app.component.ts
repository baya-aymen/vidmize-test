import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	// Mise à jour du component tableau lors d'ajout d'un utilisateur
  eventsSubject: Subject<void> = new Subject<void>();

  updateTableau(data){
  	this.eventsSubject.next();
  }
  
}
