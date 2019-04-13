import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from '../../../../assets/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
