import Animals from './animals.js';
export default class Birds extends Animals {
    constructor(animalName, animalType, animalDiet, animalSpeed) {
        super(animalName, animalType, animalDiet, animalSpeed);
    }
    displayAbility() {
        console.log(`${this.name} can fly with speed ${this.speed}km/h`);
    }
    displayUnique() {
        console.log(`${this.type} can fly`)
    }
    displayInfo() {
        console.log(`${this.name} belongs to ${this.type}, ${this.diet}`)
    }
    
}