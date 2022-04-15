import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  constructor(name: string) {
    this._race = new Elf(name, 10);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.dexterity / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = 10;
    this._energy = { type_: this._archetype.energyType,
      amount: getRandomInt(1, 10) };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }
  
  get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  attack(enemy: Fighter): void {
    const enemyC = enemy;
    enemyC.receiveDamage(this._strength);
  }

  special(enemy: Fighter): void {
    console.log(enemy);
    this._dexterity = 0;
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy = { type_: this._archetype.energyType, amount: 10 };

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
      this._lifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    let damage = 0;
    damage = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }
}