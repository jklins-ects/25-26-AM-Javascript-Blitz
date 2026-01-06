class Animal {
    // <- Parent class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
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
    attackBryan(speed) {
        console.log(`${this.name} is attacking Bryan at a speed of ${speed}`);
    }
}

//Children!
class Rabbit extends Animal {
    //notice the extends keyword - means it inherits from Animal
    constructor(name, age, runspeed) {
        super(name, age); //calls constructor of parent

        this.runspeed = runspeed;
    }
    hop() {
        console.log(`${this.name} is hopping to Bryan's house.`);
        super.attackBryan(this.runspeed); //call a method in the parent class
    }
}

class Fish extends Animal {
    constructor(name, age, swimspeed) {
        super(name, age);

        this.swimspeed = swimspeed;
    }
    swim() {
        console.log(`${this.name} is swimming to Bryan's house.`);
        super.attackBryan(this.swimspeed); //call a method in the parent class
    }
}

class Hawk extends Animal {
    constructor(name, age, flyspeed) {
        super(name, age);

        this.flyspeed = flyspeed;
    }
    fly() {
        console.log(`${this.name} is flying to Bryan's house.`);
        super.attackBryan(this.flyspeed); //call a method in the parent class
    }
}

const bunny = new Rabbit("bunny", 2, 50);
const goldie = new Fish("goldie", 1, 10);
const bird = new Hawk("bird", 12, 35);

bunny.eat();
goldie.sleep();
bird.eat();

bunny.botherBryan();
bunny.hop();
goldie.botherBryan();
goldie.swim();
bird.botherBryan();
bird.fly();
