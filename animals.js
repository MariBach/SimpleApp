export default class Animals {
    constructor(animalName, animalType, animalDiet, animalSpeed) {
        this.name = animalName;
        this.type = animalType;
        this.diet = animalDiet;
        this.speed = animalSpeed;
    }
    displayAbility() {
        console.log(`${this.name} can run with speed ${this.speed}km/h`);
    }
    static displayBreeth() {
        console.log(`Every animal can breeth`);
    } 
}