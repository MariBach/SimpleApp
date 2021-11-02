//5.Move classes to separate files and import them into the app using import/export.
import Vehicle from "./vehicle.js";
import Car from "./car.js";
import Truck from "./truck.js";

let volvo = new Car("XC60", 2015, 220);
let auto = new Vehicle("BMW", 2019, 210);
let kamaz = new Truck("KAMAZ", 2010, 100);
auto.displayInfo(); //3.Call method of father’s class.
volvo.displayInfo();
volvo.transportPeople();
kamaz.displayInfo();
kamaz.transportContainer();
Vehicle.LicenseCheck(); //call static method; output: 'License: required'*/




