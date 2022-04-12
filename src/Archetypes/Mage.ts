import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energy: EnergyType;
  static count = 0;
  constructor(name: string) {
    super(name);
    this._energy = 'mana';
    Mage.count += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.count;
  }
  
  get energyType(): EnergyType {
    return this._energy;
  }
}