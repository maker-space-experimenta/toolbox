import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-documents',
  inputs: ['doc'],
  templateUrl: './input-documents.component.html',
  styleUrls: ['./input-documents.component.scss']
})
export class InputDocumentsComponent implements OnInit {

  doc: any;

  constructor() { }

  ngOnInit() {
  }

}
