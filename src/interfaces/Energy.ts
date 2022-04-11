import EnergyType from './EnergyType';

export default interface Energy {
  type_: EnergyType;
  amount: number;
}