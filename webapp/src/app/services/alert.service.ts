import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import Alert from '../classes/alert';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  AppAlert: BehaviorSubject<Alert> = new BehaviorSubject<Alert>(null);

  sendAppAlert(item: Alert) {
    this.AppAlert.next(item);
  }

  updateAlert() {
    
  }
}
