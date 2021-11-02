import Animals from './animals.js';
import Mammals from './mammals.js';
import Birds from './birds.js';
import Fish from './fish.js'; 
let rabbit = new Animals("Rabbit", "Mammals", "Herbivovers", 15);
let wolf = new Mammals("Wolf", "Mammals", "Carnivores", 17);
let sparrow = new Birds("Sparrow", "Birds", "Seed-eating", 20);
let tuna = new Fish("Tuna", "Fish", "Carnivores", "Ocean", 70)
Animals.displayBreeth();
rabbit.displayAbility();
console.log('--------------------------------------------');
wolf.displayInfo();
wolf.displayAbility();
console.log('--------------------------------------------');
sparrow.displayInfo();
sparrow.displayUnique();
sparrow.displayAbility();
console.log('--------------------------------------------');
tuna.displayInfo();
tuna.displayUnique();
tuna.displayAbility();





