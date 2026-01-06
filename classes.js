class Car {
    constructor(make, model, year, color, gallons = 10, mpg = 20) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.gallons = gallons;
        this.mpg = mpg;
    }

    printStats() {
        console.log(`${this.make} ${this.model} ${this.year} ${this.color}`);
    }

    milesToEmpty() {
        return this.gallons * this.mpg;
    }
}

const myCar = new Car("CMP", "Cheese", 2026, "Yellow", 20, 40);
myCar.printStats();
console.log(myCar.milesToEmpty());
