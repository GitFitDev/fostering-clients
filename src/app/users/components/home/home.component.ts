import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from '../../../../assets/data';
import { IHero } from '../../../shared/models/Hero';
import { DataService } from '../../../shared/services/data.service';
import {slideInAnimation } from '../../../../assets/route-animations';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideInAnimation]
})
export class HomeComponent implements OnInit {
  heroes: IHero[];

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.heroes = this.dataService.getCompetencies();
  }

  heroClicked(hero: IHero) {
    this.dataService.setSelectedCompetency(hero);
    this.router.navigate(['/skills']);
  }
}
