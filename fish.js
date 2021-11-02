import Animals from './animals.js';
export default class Fish extends Animals {
    constructor(animalName, animalType, animalDiet, fishHabitat, animalSpeed) {
        super(animalName, animalType, animalDiet, animalSpeed);
        this.habitat = fishHabitat;
    }
    displayAbility() {
        console.log(`${this.name} can swim with speed ${this.speed}km/h`);
    }
    displayUnique() {
        console.log(`${this.type} can breeth under water`)
    }
    displayInfo() {
        console.log(`${this.name} belongs to ${this.type}, ${this.diet} and lives in ${this.habitat}`)
    }
}