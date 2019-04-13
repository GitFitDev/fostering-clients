import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from '../../../../assets/data';
import { DataService } from '../../../shared/services/data.service';
import {slideInAnimation } from '../../../../assets/route-animations';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss'],
  animations: [slideInAnimation]
})
export class SkillsListComponent implements OnInit {
  competency: any;
  skills: any = [];

  constructor(private router: Router, private dataService: DataService) {
    this.competency = dataService.getSelectedCompetency();
    this.skills = this.competency.skills;
  }

  ngOnInit() {
  }

  skillClicked(skill) {
    this.dataService.setSelectedSkill(skill);
    this.router.navigate(['/assessment']);
  }

  
}
