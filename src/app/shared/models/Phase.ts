export interface IPhase {
  id: string;
  title: string;
  complete?: boolean;
  dateComplete?: number; // unix timestamp
}
