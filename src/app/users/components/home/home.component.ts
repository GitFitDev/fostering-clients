import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  competencies = [
    {
      title: 'comp one',
      desc: 'this is a test'
    },
    {
      title: 'comp two',
      desc: 'this is a test'
    },
    {
      title: 'comp three',
      desc: 'this is a test'
    },
    {
      title: 'comp four',
      desc: 'this is a test'
    },
    {
      title: 'comp five',
      desc: 'this is a test'
    },
    {
      title: 'comp six',
      desc: 'this is a test'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  cardClicked(cardTitle) {
   
  }
}
