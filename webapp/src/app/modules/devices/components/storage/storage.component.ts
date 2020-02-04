import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { data } from './data';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {

  locations: any[] = data;

  selectedLocation: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    let storeid = this.route.snapshot.paramMap.get('storeid');
    this.selectedLocation = this.findLocation(storeid);

    console.log("storeid", this.selectLocation);
  }

  getChildren = (location) => location.children;

  findLocation(storeid) {
    for (const location of this.locations) {
      let result = this.findLocationFromLocation(storeid, location);
      if (result) {
        return result;
      }
    }
  }
  findLocationFromLocation(storeid, location): any {
    if (location && location.id == storeid) {
      return location;
    }

    if (location) {
      for (const child of location.children) {
        let result: any = this.findLocationFromLocation(storeid, child);
        if (result) {
          return result;
        }
      }
    }

    return null;
  }

  selectLocation(event, location: any) {
    this.router.navigate(['devices', 'storage', location.id ]);
    this.selectedLocation = this.findLocation(location.id);
    
    event.stopPropagation();
  }

  getAllItems(location: any) {
    let items = [];
    if (location.items){
      location.items.forEach(m=> {
        m.storage = location.id + " " + location.name;
        items.push(m)
      });
    }    

    for (const child of location.children) {
      this.getAllItems(child).forEach(m=> items.push(m));
    }

    console.log(items);

    return items;
  }

}
