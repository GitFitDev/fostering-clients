import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from '../../../../assets/data';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
