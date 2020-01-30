import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Device } from 'src/app/models/device';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevicesRepository {

  Devices: BehaviorSubject<Device[]> = new BehaviorSubject<Device[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  GetAll(): Observable<Device[]> {
    let subject = new Subject<Device[]>();

    this.http.get<Device[]>(environment.apis.devices.url).subscribe(result => {
      console.log("result:", result);
      this.Devices.next(result);
      subject.next(result);
    });

    return subject;
  }

  GetById(id: string): Observable<Device> {
    let subject = new Subject<Device>();

    this.GetAll().subscribe(result => {
      subject.next( result.find(m=>m.id == id) );
    });

    return subject;
  }
}
