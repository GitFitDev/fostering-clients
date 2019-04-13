import { Injectable } from '@angular/core';
import { data } from '../../../assets/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedCompetency = {};
  private selectedSkill = {};

  constructor() { }

  getCompetencies() {
    return data.competencies;
  }

  getSelectedCompetency() {
    return this.selectedCompetency;
  }

  setSelectedCompetency(competency) {
    this.selectedCompetency = competency;
  }

  getSelectedSkill() {
    return this.selectedSkill;
  }

  setSelectedSkill(skill) {
    this.selectedSkill = skill;
  }
}
