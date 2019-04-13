import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../../../assets/data';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {
  competencyId: number;
  skills: any = [];

  constructor(private route: ActivatedRoute) {
    this.competencyId = +this.route.snapshot.paramMap.get('id');
    this.skills = data.competencies.find(comp => comp.id === this.competencyId).skills;
  }

  ngOnInit() {
  }

}
