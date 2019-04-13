import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../shared/services/data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
  skill: any;

  constructor(
    private dataService: DataService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.skill = this.dataService.getSelectedSkill();
  }

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/skills']);
  }
}
