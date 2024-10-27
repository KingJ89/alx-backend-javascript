import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, batteryRange) {
    super(brand, motor, color);
    this._batteryRange = batteryRange;
  }

  // Override Symbol.species to reference the Car class, ensuring that cloneCar creates a Car instance
  static get [Symbol.species]() {
    return Car;
  }
}
