import { Component, OnInit } from '@angular/core';
import { Chart, ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartDataSets: ChartDataSets[] = [
    {
      data: [1, 1, 1, 1, 1, 2],
      hoverBorderWidth: 15,
      hoverBorderColor: ['red', 'blue', 'green', 'yellow', 'orange', 'black'],
      backgroundColor: ['red', 'blue', 'green', 'yellow', 'orange', 'black']
    }
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: ChartOptions = {  };

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    debugger
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    // debugger
    // console.log(event, active);
  }

}
