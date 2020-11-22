import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vidmize-test';
  eventsSubject: Subject<void> = new Subject<void>();

  updateTableau(data){
  	console.log('mise a jour');
  	this.eventsSubject.next();
  }
  
}
