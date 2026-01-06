//static - create a property that is associated with the entire class
// -- NO OBJECT (instance) Necessary

class MathUtil {
    static PI = 3.141592;
    //static methods:
    static getDiameter(radius) {
        return radius * 2;
    }
}
//It's like Math.round
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(5));

//mixing static and non-static:
class User {
    static userCount = 0;
    constructor(username) {
        this.username = username;
        User.userCount++;
    }
    sayHello() {
        console.log(`Hello, my username is ${this.username}`);
    }
}

const myUser = new User("BadBeans");
const myUser2 = new User("BadBeans");
const myUser3 = new User("BadBeans");
const myUser4 = new User("BadBeans");
const myUser5 = new User("BadBeans");
myUser.sayHello();
console.log(`Static val ${User.userCount}`);
console.log(`Non-Static val ${myUser.userCount}`); //undefined - static is at the class level!

//when is static useful?
// - when all objects share one value
// - helpful for grouping methods that don't necessarily require instances
