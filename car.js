import Vehicle from "./vehicle.js";
export default class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = 'car';
    
    }
    //Override method of father’s class.
    displayInfo() {
        console.log(`It is a car model: ${this.model}; made in year: ${this.year}; car max speed: ${this.maxSpeed};`);
    }
    transportPeople() {
        console.log(`I am starting transporting passengers`);
      
    }
}