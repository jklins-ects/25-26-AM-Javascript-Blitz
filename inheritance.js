class Animal {
    // <- Parent class
    alive = true;
    eat() {
        console.log(`${this.name} is eating`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
    botherBryan() {
        console.log(
            `${this.name} says: \"Hehehehehehehehe, I'm coming after you Bryan!\"`
        );
    }
}

//Children!
class Rabbit extends Animal {
    //notice the extends keyword - means it inherits from Animal
    name = "Rabbit";
    hop() {
        console.log(`${this.name} is hopping to Bryan's house.`);
    }
}

class Fish extends Animal {
    name = "Fish";
    swim() {
        console.log(`${this.name} is swimming to Bryan's house.`);
    }
}

class Hawk extends Animal {
    name = "Hawk";
    fly() {
        console.log(`${this.name} is flying to Bryan's house.`);
    }
}

const bunny = new Rabbit();
const goldie = new Fish();
const bird = new Hawk();

bunny.eat();
goldie.sleep();
bird.eat();

bunny.botherBryan();
bunny.hop();
goldie.botherBryan();
goldie.swim();
bird.botherBryan();
bird.fly();
