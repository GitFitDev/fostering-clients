import { ISkill } from './Skill';

export interface IHero {
  id: string;
  name: string;
  desc: string;
  image: string;
  skills: ISkill[];
}
