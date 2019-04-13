import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from '../../../../assets/data';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {
  competency: any;
  skills: any = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    const competencyId = +this.route.snapshot.paramMap.get('id');
    this.competency = data.competencies.find(comp => comp.id === competencyId);
    this.skills = this.competency.skills;
  }

  ngOnInit() {
  }

  skillClicked(id) {

  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
