import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ISkill } from '../../../shared/models/Skill';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss'],
  animations: []
})
export class AssessmentComponent implements OnInit {
  skill: ISkill;

  constructor(
    private dataService: DataService,
    private router: Router,
    public dialog: MatDialog,
    private _location: Location
  ) {
    this.skill = this.dataService.getSelectedSkill();
  }

  ngOnInit() {}

  goBack() {
    this._location.back();
  }
}
