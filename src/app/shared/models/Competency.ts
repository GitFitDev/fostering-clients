import { ISkill } from './Skill';

export interface ICompetency {
  id: string;
  title: string;
  desc: string;
  skills: ISkill[];
}
