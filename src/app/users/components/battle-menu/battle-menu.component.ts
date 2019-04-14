import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-battle-menu',
  templateUrl: './battle-menu.component.html',
  styleUrls: ['./battle-menu.component.scss']
})
export class BattleMenuComponent implements OnInit {
  friends = [
    {
      username: 'Edward Smith',
      level: 400,
      heroForBattle: 'Spiderman',
      profileImage: 'assets/profile-icons/man.png'
    },
    {
      username: 'Jessica Ross',
      level: 720,
      heroForBattle: 'Catwoman',
      profileImage: 'assets/profile-icons/girl.png'
    },
    {
      username: 'Abigail Hamilton',
      level: 300,
      heroForBattle: 'Doctor Strange',
      profileImage: 'assets/profile-icons/girl-1.png'
    },
    {
      username: 'James Anderson',
      level: 200,
      heroForBattle: 'Batman',
      profileImage: 'assets/profile-icons/man-2.png'
    },
    {
      username: 'Liam Chapman',
      level: 525,
      heroForBattle: 'Captain Marvel',
      profileImage: 'assets/profile-icons/boy-1.png'
    },
    {
      username: 'Rachel Mackenzie',
      level: 460,
      heroForBattle: 'Storm',
      profileImage: 'assets/profile-icons/man-3.png'
    }
  ];

  constructor(private _location: Location) {}

  ngOnInit() {}

  goBack() {
    this._location.back();
  }
}
