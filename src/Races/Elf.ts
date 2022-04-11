import Race from './Race';

export default class Elf extends Race {
  private _lifePoints: number;
  static count = 0;
   
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 99;
    Elf.count += 1;
  }

  get maxLifePoints():number { return this._lifePoints; }

  static createdRacesInstances(): number {
    return Elf.count;
  }
}