import { Injectable } from '@angular/core';

import { data } from '../../../assets/data';
import { ICompetency } from '../models/Competency';
import { ISkill } from '../models/Skill';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedCompetency: ICompetency;
  private selectedSkill: ISkill;

  constructor() { }

  getCompetencies(): ICompetency[] {
    return data.competencies;
  }

  getSelectedCompetency(): ICompetency {
    return this.selectedCompetency;
  }

  setSelectedCompetency(competency): void {
    this.selectedCompetency = competency;
  }

  getSelectedSkill(): ISkill {
    return this.selectedSkill;
  }

  setSelectedSkill(skill): void {
    this.selectedSkill = skill;
  }
}
