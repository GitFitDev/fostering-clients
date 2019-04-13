import { IPhase } from './Phase';

export interface ISkill {
  id: string;
  title: string;
  desc: string;
  power: number;
  // phases?: IPhase[];
}
