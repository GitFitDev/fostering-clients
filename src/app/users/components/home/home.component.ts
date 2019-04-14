import { Component, OnInit, HostBinding,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { data } from '../../../../assets/data';
import { IHero } from '../../../shared/models/Hero';
import { DataService } from '../../../shared/services/data.service';
import { trigger, state, style, animate, transition, useAnimation } from '@angular/animations';
// import { zoomOut } from 'ng-animate/lib/zooming';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('buttonState', [
      transition('void <=> *', []),
      transition('* <=> *', [
        style({height: '{{startHeight}}px', opacity: 0}),
        animate('.5s ease'),
      ], {params: {startHeight: 0}})
    ]),
    // trigger('zoomOut', [transition('* => *', useAnimation(zoomOut))])
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
  public barChartLabels: Label[] = [
    '2006',
    '2007',
    '2008',
  ];
  public barChartType: ChartType = 'bar';

  public barChartData: ChartDataSets[] = [
    { data: [65] },
    { data: [65] },
    { data: [65] },
  ];

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.heroes = this.dataService.getCompetencies();
  }

  heroClicked(hero: IHero) {
    this.dataService.setSelectedCompetency(hero);
    this.router.navigate(['/skills']);
  }

  // events
  public chartClicked({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40
    ];
    this.barChartData[0].data = data;
  }
}
