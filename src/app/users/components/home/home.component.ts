import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { data } from '../../../../assets/data';
import { ICompetency } from '../../../shared/models/Competency';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  competencies: ICompetency[];

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.competencies = this.dataService.getCompetencies();
  }

  cardClicked(competency: ICompetency) {
    this.dataService.setSelectedCompetency(competency);
    this.router.navigate(['/skills']);
  }
}
