// ------------- Refer OOPSummary image for complete summary of class ----------
// script for opening an image using js only
// Create an image element
const img = new Image();
img.style.maxWidth = '100%';

// Set the source of the image to the file in the same folder
img.src = './OOP Summary.png'; 
// Replace with your actual image filename
// Append the image element to the document body
document.body.appendChild(img);
// ------------------------------------------------------------------------------------

// OOP- object oriented paradigm - paradigm means style of programming - -e. way of writing and organizong code
// Object- collection of properties and methods
//* abstraction- hiding low level details from user. encapsulation-wrapping up of data i.e some objects and methods are privately encapsulated t oprotect from code change.inheritence - inheriting the methods and properties of parent to child. polymorphism- child class overriding a method inherited from parent. */

// Prototype - contains methods and properties that can be accessed by objects is call ed proptype inheritance or protype delegation.
// /Javascruot dont have class. in 3 ways obejects are created programmtically in js.
// using constructior function, es6 clasess , object.create

// Constructor function - has new operator
const PersonName = function(fName,lName,bYear){
    this.fName = fName;
    this.lName = lName;
    this.bYear = bYear;
    // Dont do this bcoz if we write like this we will create copy of this methos for each object if we write sperate function all objects can reuse that.
    // this.calcAge= function(){
    //     console.log(2057-this.bYear)
    // }
}
const nameSt = new PersonName('bn','nisha',1990)
const nameSt1 = new PersonName('ed','nisha',1993)
const nameSt2 = new PersonName('xc','nisha',1992)
console.log(nameSt,nameSt1,nameSt2)

// Process: 1.new object will create
// in function this empty object will create
// to that empty object valued are assigned ,linked to prototype
// automatically return from function

// object created by class is called instance,but here object created by constructor function is simlar like created by class so it is also instance.
console.log(nameSt instanceof PersonName);

// PersonName.prototype is a prototype for all objects created by personname constructor function.

PersonName.prototype.calcAge = function(){
    console.log(2057-this.bYear)
}

nameSt1.calcAge();
nameSt.calcAge();
nameSt2.calcAge();

console.log(nameSt.__proto__)
console.log(nameSt.__proto__ === PersonName.prototype)

console.log(PersonName.prototype.isPrototypeOf(nameSt1))

PersonName.prototype.species = 'human';
console.log(nameSt1,nameSt2)
console.log(nameSt1.species)

console.log(nameSt1.hasOwnProperty('fName'))
console.log(nameSt1.hasOwnProperty('species'))

// Note: nameSt1 prototype is personName , personName's prototype is object prototype object prototype has constructor,object's prototype is null ---this is Prototype Chain like scope chain in scope hain if a variable cant find in the curent scope then it wil search next scope.

console.log(nameSt.__proto__)

// Object.prototype (top of prototype chain)
console.log(nameSt.__proto__.__proto__)
console.log(nameSt.__proto__.__proto__.__proto__)

console.dir(PersonName.prototype.constructor)

const numberArr = [3,6,5,7,9,3]  /*new Arr===[] */
console.log(numberArr.__proto__)
console.log(numberArr.__proto__ === Array.prototype)
console.log(numberArr.__proto__.__proto__)

// dont create like this methods directly in prototype
Array.prototype.unique = function(){
    return [...new Set(this)]
}

console.log(numberArr.unique())

const h1=document.querySelector('h1');
console.dir(h1)

console.dir(x=>x+1)

/////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function(make,speed){
    this.make=make;
    this.speed=speed;
    console.log(`${this.make} going at ${this.speed} km/h`)
}

const car1 = new Car('BMW',120)

const car2 = new Car('Mercedes',95)


Car.prototype.accelerate = function(){
    console.log(`${this.make} going at ${this.speed+10} km/h`)
}
Car.prototype.brake = function(){
    console.log(`${this.make} going at ${this.speed-5} km/h`)
}
car1.accelerate();
car1.brake();

//////////////// ES6 Classes ////////////////////////////
/*Es6 classes is a modern way of writing a constructor function we learned above. it hiding the working of javascript*/
// class expression const personCl = class{}
class personCl{
    constructor(fn,birthYear){
        this.fullname=fn;
        this.birthYear=birthYear;
    }
    // Methods will be added to object's .prototype property not in object.
    greet(){
        console.log(`Hey ${this.fullname}`)
    }

    get age(){
        return 2037 -this.birthYear;
    }
// Set a property that already exists
    set fullname(name){
        if(name.includes(' '))
        this._fullname = name;
    else alert(`${name} is not a full name`)
    }
    get fullname(){
        return this._fullname;
    }

    static hey() {
        console.log('Hey there 👋');
        console.log(this);
      }
}
const personobj1 = new personCl('lucy mark',1964);
console.log(personobj1);
personobj1.greet();
console.log(personobj1.age)
personCl.hey();
console.log(personobj1.__proto__=== personCl.prototype)

// 1. Classes are not hoisted - hoisted means can access before declaration,but function can access before declaration
// 2. classess are first class ciitzens - means can pass to function and also can return from function
// 3.classes are excuted in strict mode - even it the whole document is not wriiten in strict mode class will excute in strict mode.

// Setters and Getters
// Why Using Getters and Setters?
// It gives simpler syntax
// It allows equal syntax for properties and methods
// It can secure better data quality
// It is useful for doing things behind-the-scenes
// 
// Setters and getters in JavaScript enable controlled access, validation, and encapsulation of data, enhancing security by regulating how object properties are set and retrieved.
const account = {
    owner:'Jonas',
    movements: [200, 530, 120, 300],
    get latest(){
        return this.movements.slice(-1).pop()
    },
    set latest(mov){
        this.movements.push(mov)
    }
}

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

// Static Methods
/*Key points about static methods:

No Instance Required: Static methods are called on the class itself and do not require an instance of the class to be created.

Access to Class Properties: Static methods have access only to static properties and other static methods of the class. They cannot access instance-specific properties.

Utility Functions: They are often used for utility functions or operations that are related to the class but don't depend on the state of individual instances.

Syntax:

Define static methods using the static keyword.*/

class MathOperations {
    // Static method to add two numbers
    static add(x, y) {
      return x + y;
    }
  
    // Static method to multiply two numbers
    static multiply(x, y) {
      return x * y;
    }
  }
  
  // Using the static methods without creating an instance
  const sumResult = MathOperations.add(5, 3);
  console.log(sumResult); // Output: 8
  
  const productResult = MathOperations.multiply(4, 2);
  console.log(productResult); // Output: 8
  
/////////////////// Object.create ///////////////////////////
// using object.create - we can create object to prototype we dont need constructor.
const Personproto = {
    calcAge(){
        console.log(2037-this.birthYr)
    },
    init(nam,birthYr){
       this.nam = nam;
       this.birthYr = birthYr;
    }
}
const steven = Object.create(Personproto);
console.log(steven)
steven.name='Steven'
steven.birthYr = 2002;
steven.calcAge();
console.log(steven.__proto__ === Personproto);
const sara = Object.create(Personproto);
sara.init('SAra',1980);
sara.calcAge();

/////// Coding challenge2 //////////
/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h */
class Cars{
    constructor(make,speed){
    this.make=make;
    this.speed=speed;
    console.log(`${this.make} going at ${this.speed} km/h`)
}
accelerate(){
    console.log(`${this.make} going at ${this.speed+10} km/h`)
}
brake(){
    console.log(`${this.make} going at ${this.speed-5} km/h`)
}
get speedUS(){
    this.speed /=1.6;
    console.log(`${this.make} going at ${this.speed} mi/h`)
}
set speedUS(speed){
    this.speed =speed * 1.6;
    console.log(`${this.make} going at ${this.speed} km/h`)
}
}
const cars1 = new Cars('BMW',120)

const cars2 = new Cars('Mercedes',95)

cars1.accelerate();
cars1.brake();
cars1.speedUS;
cars1.speedUS = 50;

// Inheritance between "classes"- using constructor functions
const PersonDet = function(fstName,bthYear){
    this.fstName = fstName;
    this.bthYear = bthYear;
}
PersonDet.prototype.calcAge=function(){
console.log(2037 - this.bthYear)
}

const Student = function(fstName, bthYear,course){
    // this refers to the newly created instance of the Student object.
   PersonDet.call(this,fstName,bthYear)
    this.course = course;
}
// Linking prototypes
Student.prototype = Object.create(PersonDet.prototype);

Student.prototype.introduce = function(){
    console.log(`My name is ${this.fstName} and I study ${this.bthYear}`)
}
const mike = new Student('Mike',2020,'Computer Science')
console.log(mike)

mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__)

console.log(mike instanceof Student)
// if we remove object.create in for persondet and remove related calcage function below output will be false. bcoz it is not linkedf to persondet prototype.
console.log(mike instanceof PersonDet)
console.log(mike instanceof Object)

Student.prototype.constructor = Student;
// if we dont writ e above student objct constructor will be persondet not student
console.dir(Student.prototype.constructor)

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23% */
const Carss = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Carss.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Carss.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function(make,speed,charge){
    Carss.call(this,make,speed);
    this.charge = charge;
}

// Link the prototype
EV.prototype = Object.create(Carss.prototype);

EV.prototype.chargeBattery = function(chargeTo){
    this.charge =chargeTo;
}
EV.prototype.accelerate = function(){
    this.speed -=20;
    this.charge--;
    console.log(`Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`)
}
const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
tesla.brake();
tesla.accelerate();

///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

class PersonCls {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }
  
    // Instance methods
    calcAge() {
      console.log(2037 - this.birthYear);
    }
  
    greet() {
      console.log(`Hey ${this.fullName}`);
    }
  
    get age() {
      return 2037 - this.birthYear;
    }
  
    set fullName(name) {
      if (name.includes(' ')) this._fullName = name;
      else alert(`${name} is not a full name!`);
    }
  
    get fullName() {
      return this._fullName;
    }
  
    // Static method
    static hey() {
      console.log('Hey there 👋');
    }
  }

class StudentCl extends PersonCls {
    constructor(fullName,birthYear,course){
        // super Always needs to happen first! bcoz super constructor is the one that creates this keyword.
         super(fullName,birthYear);
         this.course = course;
    }
    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
    calcAge() {
        console.log(
          `I'm ${
            2037 - this.birthYear
          } years old, but as a student I feel more like ${
            2037 - this.birthYear + 10
          }`
        );
      }
}
const mark = new StudentCl ('Mark louis',2012,'Computer Science')
mark.introduce();
mark.calcAge();

///////////////////////////////////////
// Inheritance Between "Classes": Object.create

const PersonProt = {
    calcAge() {
      console.log(2037 - this.birthYear);
    },
  
    init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  };
  
  const steven1 = Object.create(PersonProt);
  
  const StudentProto = Object.create(PersonProt);  /*personprototype is the proottype of stuent proototype*/
  StudentProto.init = function (firstName, birthYear, course) {
    PersonProt.init.call(this, firstName, birthYear);
    this.course = course;
  };
  
  StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  };
//   studentproototype is the prototype of student object
  const jay = Object.create(StudentProto);
  jay.init('Jay', 2010, 'Computer Science');
  jay.introduce();
  jay.calcAge();

// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

// Class example
class Account{
  // 1.public fields(for instances not for prototype)
  locale = navigator.language;
  // 2.private fields - not accessible outside of class (for instances not for prototype)
   #movements = [];
   #pin;
  constructor(owner,currency,pin){
    this.owner = owner;
    this.currency = currency;
    // this.pin = pin;
    // this._pin = pin;   ----this is protected naming convention. to really make this data protected we use private field .
    this.#pin = pin;
    // this.movements = []; 
    // we use _ as a naming convention to say property is protected.
    // this._movements = []; we are making it as private field above
    // this.locale = navigator.language;
    console.log(`THanks for opening an account ${owner}`)
  }
  // public interface
  deposit(val){
    // this._movements.push(val);
    this.#movements.push(val);
     // need to return this for chaining class methods
     return this;

  }
  withdraw(val){
    this.deposit(-val);
     // need to return this for chaining class methods
     return this;
   
  }
  getMovements(){
    // return this._movements;
    return this.#movements;
  }
  // Private method
//   #approveLoan(val){
//     return true;
//  }--------there is no private method is considered in google chrome it is considered as private class field
  _approveLoan(val){
    return true;
  }
 
  requestLoan(val){
    if(this._approveLoan(val)){
      this.deposit(val);
      console.log('loan approved')
    }
    // need to return this for chaining class methods
    return this;
  }
  static helper() {
    console.log('Helper');
  }
}
const acc1 = new Account('John','EUR',1111);
// even with protected still we can do like below. but we should not do like this for protected. we can use public method to access protected movements array.
// acc1.movements.push(400);
// acc1.movements.push(-150);
// this is equal to below using methods
acc1.deposit(250);
acc1.withdraw(150);
acc1.requestLoan(1000);
// able to access important methods an properties easily bcoz it is public so we need encapsulation to protect data 
acc1._approveLoan(1000);
console.log(acc1.getMovements());
console.log(acc1)
// we can access proprties like this in protected naming convention
// console.log(acc1._pin);

// we can access private fields, it will gives u error.
// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));


// access static method using class not instance
Account.helper();

// Chaining in the class methods
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

*/

class Carcls{
  constructor(make,speed){
    this.make = make;
    this.speed = speed;
  }
  accelerate(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
class EVcls extends Carcls{
  #charge;
  constructor(make,speed,charge){
    super(make,speed);
        this.#charge = charge;
  }
  chargeBattery(chargeTo){
     this.#charge = chargeTo;
     return this;
  }
  accelerate(){
    this.speed+=20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}
const rivian = new EVcls('Rivian', 120, 23);
console.log(rivian);

// console.log(rivian.#charge);

rivian.accelerate()
.accelerate()
.accelerate()
.brake()
.chargeBattery(50)
.accelerate();

console.log(rivian.speedUS);
  