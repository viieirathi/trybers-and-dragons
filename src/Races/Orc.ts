import Race from './Race';

export default class Orc extends Race {
  private _lifePoints: number;
  static count = 0;
   
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 74;
    Orc.count += 1;
  }

  get maxLifePoints():number { return this._lifePoints; }

  static createdRacesInstances(): number {
    return Orc.count;
  }
}