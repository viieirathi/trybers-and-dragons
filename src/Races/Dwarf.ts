import Race from './Race';

export default class Dwarf extends Race {
  private _lifePoints: number;
  static count: 0;
   
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 80;
    Dwarf.count += 1;
  }

  get maxLifePoints():number { return this._lifePoints; }

  static createdRacesInstances(): number {
    return Dwarf.count;
  }
}