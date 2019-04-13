import { Component, OnInit, HostBinding, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { data } from '../../../../assets/data';
import { IHero } from '../../../shared/models/Hero';
import { DataService } from '../../../shared/services/data.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('buttonState', [
      transition('void <=> *', []),
      transition(
        '* <=> *',
        [
          style({ height: '{{startHeight}}px', opacity: 0 }),
          animate('.5s ease')
        ],
        { params: { startHeight: 0 } }
      )
    ]),
    trigger('expanded', [
      state(
        'normal',
        style({})
      ),
      state(
        'expanded',
        style({
          height: '1000px',
          width: '1000px',
          // opacity: 0.5,
          'z-index': 10001
        })
      ),
      transition('normal => expanded', [animate('1s')]),
      transition('expanded => normal', [animate('1s')])
    ])
  ]
})
export class HomeComponent implements OnInit {
  trigger: string;
  startHeight: number;

  heroes: IHero[];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    }
  };
  public barChartType: ChartType = 'bar';


  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.heroes = this.dataService.getCompetencies();
  }

  heroClicked(hero: IHero) {
    hero.isSelected = true;

    // this.dataService.setSelectedCompetency(hero);
    // this.router.navigate(['/skills']);
  }
}
