class Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed;
    }
    displayInfo() {
        console.log(`Name: ${this.model}; Year: ${this.year}; Max Speed: ${this.maxSpeed}`);
    }
    // Add static method
    static LicenseCheck() {
        console.log(`License: required`);
    }
}

class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = 'car';
    
    }
    transportPeople() {
        console.log(`I am starting transporting passengers`);
      
    }
}
class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = 'truck';
    }
    transportContainer() {
        console.log(`I am starting transporting heavy container`);
    }

}
let volvo = new Car("XC60", 2015, 220);
let auto = new Vehicle("BMW", 2019, 210);
let kamaz = new Truck("KAMAZ", 2010, 100);
auto.displayInfo();
volvo.displayInfo();
volvo.transportPeople();
kamaz.displayInfo();
kamaz.transportContainer();
Vehicle.LicenseCheck(); //call static method; output: 'License: required'
auto.LicenseCheck(); //call static method; output: 'TypeError: auto.LicenseCheck is not a function' 



