export default abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(na: string, dex: number) {
    this._name = na;
    this._dexterity = dex;
  }

  get name(): string {
    return this._name;
  }

  get dexterity():number {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;

  static createdRacesInstances():number {
    throw new Error('Not implemented');  
  }
}