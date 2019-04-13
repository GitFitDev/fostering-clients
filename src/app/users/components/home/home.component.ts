import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from '../../../../assets/data';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ trigger, state, style, animate, transition]
})
export class HomeComponent implements OnInit {
  competencies = data.competencies;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  cardClicked(cardId) {
    this.router.navigate(['/skills', cardId]);
  }
}
