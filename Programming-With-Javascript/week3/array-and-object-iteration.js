

// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']


function logDairy() {
    for (const item of dairy) {
        console.log(item);
    }
}
logDairy();

// Task 2

const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (key of Object.keys(bird)) {
        console.log(key, ": ", bird[key])
    }
}

birdCan();

// Task 3

function animalCan() {
    for (key of Object.keys(bird)) {
        console.log(key, ": ", bird[key])
    }
    for (key of Object.keys(animal)) {
        console.log(key, ": ", animal[key])
    }
}

animalCan();
