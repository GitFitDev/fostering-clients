import { Component, OnInit, HostBinding,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { data } from '../../../../assets/data';
import { IHero } from '../../../shared/models/Hero';
import { DataService } from '../../../shared/services/data.service';
import { trigger, state, style, animate, transition } from '@angular/animations';


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
    ])
  ]
})
export class HomeComponent implements OnInit {
  trigger: string;
  startHeight: number;

  heroes: IHero[];

  constructor(private router: Router, private dataService: DataService, private element: ElementRef) { }

  buttonState() {
    return {value: this.trigger, params: {startHeight: this.startHeight}};
  }

  setStartHeight(){
    this.startHeight = this.element.nativeElement.clientHeight;
  }

  ngOnInit() {
    this.heroes = this.dataService.getCompetencies();
  }

  heroClicked(hero: IHero) {
    this.dataService.setSelectedCompetency(hero);
    this.router.navigate(['/skills']);
  }
}
