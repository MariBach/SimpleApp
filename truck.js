import Vehicle from "./vehicle.js";
export default class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = 'truck';
    }
    //Override method of father’s class.
    displayInfo() {
        super.displayInfo();
        console.log(`Please note, driving trucks requires additional driver's license category`)
    }
    transportContainer() {
        console.log(`I am starting transporting heavy container`);
    }
}