import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IHero } from '../../../shared/models/Hero';
import { ISkill } from '../../../shared/models/Skill';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss'],
  animations: []
})
export class SkillsListComponent implements OnInit {
  competency: IHero;
  skills: ISkill[] = [];  
  constructor(private router: Router, private dataService: DataService) {
    this.competency = dataService.getSelectedCompetency();
    this.skills = this.competency.skills;
  }

  ngOnInit() {
  }

  skillClicked(skill: ISkill) {
    this.dataService.setSelectedSkill(skill);
    this.router.navigate(['/assessment']);
  }

  goBack() {
    this.router.navigate(['/home']);
  }
 
}
