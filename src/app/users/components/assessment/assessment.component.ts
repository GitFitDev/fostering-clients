import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from '../../../../assets/data';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  skill: any;

  constructor(private dataService: DataService, private router: Router) {
    this.skill = this.dataService.getSelectedSkill();
  }

  ngOnInit() {
  }

}
