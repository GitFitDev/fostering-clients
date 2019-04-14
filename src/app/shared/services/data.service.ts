import { Injectable } from '@angular/core';

import { data } from '../../../assets/data';
import { IHero } from '../models/Hero';
import { ISkill } from '../models/Skill';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedCompetency: IHero;
  private selectedSkill: ISkill;

  constructor() { }

  getCompetencies(): IHero[] {
    return data.heroes;
  }

  getSelectedCompetency(): IHero {
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
