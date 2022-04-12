import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energy: EnergyType;
  static count = 0;
  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
    Warrior.count += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.count;
  }
  
  get energyType(): EnergyType {
    return this._energy;
  }
}