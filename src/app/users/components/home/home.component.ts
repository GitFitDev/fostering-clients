import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from '../../../../assets/data';
import { DataService } from '../../../shared/services/data.service';
import {slideInAnimation } from '../../../../assets/route-animations';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideInAnimation]
})
export class HomeComponent implements OnInit {
  competencies;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.competencies = this.dataService.getCompetencies();
  }

  cardClicked(competency) {
    this.dataService.setSelectedCompetency(competency);
    this.router.navigate(['/skills']);
  }
}
