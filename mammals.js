import Animals from './animals.js';
export default class Mammals extends Animals {
    constructor(animalName, animalType, animalDiet, animalSpeed) {
        super(animalName, animalType, animalDiet, animalSpeed);
    }
    
    displayAbility() {
        super.displayAbility();
        console.log(`${this.type} produce milk for feeding their young`);
    }
    displayInfo() {
        console.log(`${this.name} belongs to ${this.type}, ${this.diet}`)
    }

}