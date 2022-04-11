import Race from './Race';

export default class Halfling extends Race {
  private _lifePoints: number;
  static count = 0;
   
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 60;
    Halfling.count += 1;
  }

  get maxLifePoints():number { return this._lifePoints; }

  static createdRacesInstances(): number {
    return Halfling.count;
  }
}