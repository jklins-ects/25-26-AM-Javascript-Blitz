//In js creating objects the way we did in object.js can get old if you wish to have many

//Constructor functions:
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.about = function () {
        console.log(`${this.make} ${this.model} ${this.year} ${this.color}`);
    };
}

const car1 = new Car("Ford", "F150", 30, "Red"); //notice "new"
const car2 = new Car("Ford", "Prious", 2040, "Green");
console.log(car1);
console.log(car2);
car1.about();
