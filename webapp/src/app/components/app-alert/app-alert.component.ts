import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import Alert from 'src/app/classes/alert';

@Component({
  selector: 'app-app-alert',
  templateUrl: './app-alert.component.html',
  styleUrls: ['./app-alert.component.scss']
})
export class AppAlertComponent implements OnInit {

  alert: Alert;

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.alertService.AppAlert.subscribe(alert => this.alert = alert);
    this.alertService.sendAppAlert(new Alert("Die Instanz wurde erfolgreich eingerichtet. Jetzt solltest du ein paar Einstellungen vornehmen."));
  }

  hideAppAlert() {
    
  }

}
