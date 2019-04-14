import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-support-tools2',
  templateUrl: './support-tools2.component.html',
  styleUrls: ['./support-tools2.component.scss']
})
export class SupportTools2Component implements OnInit {

  constructor(private _location: Location) {

  }


  ngOnInit() {
  }

  goBack() {
    this._location.back();
  }

}
