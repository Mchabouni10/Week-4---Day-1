// class Hamster {
//     constructor(name) {
//       this.owner = '';
//       this.name = name;
//       this.price = 15;
//     }
  
//     wheelRun() {
//       console.log("squeak squeak");
//     }
  
//     eatFood() {
//       console.log("nibble nibble");
//     }
  
//     getPrice() {
//       return this.price;
//     }
//   }

  
//   class Person {
//     constructor(name) {
//       this.name = name;
//       this.age = 0;
//       this.height = 0;
//       this.weight = 0;
//       this.mood = 0;
//       this.hamsters = [];
//       this.bankAccount = 0;
//     }
  
//     getName() {
//       return this.name;
//     }
  
//     getAge() {
//       return this.age;
//     }
  
    // getWeight() {
    //   return this.weight;
    // }
  
    // greet() {
    //   console.log(`Hello, my name is ${this.name}`);
    // }
  
    // eat() {
    //   this.weight++;
    //   this.mood++;
    // }
  
//     exercise() {
//       this.weight--;
//     }
  
//     ageUp() {
//       this.age++;
//       this.height++;
//       this.weight++;
//       this.mood--;
//       this.bankAccount += 10; 
//     }
  
//     buyHamster(hamster) {
//       this.hamsters.push(hamster);
//       this.mood += 10;
//       this.bankAccount -= hamster.getPrice();
//     }
//   }
  
//   const person = new Person("Mark");
//   for (let i = 0; i < 6; i++) {
//     person.ageUp();
//   }


// person.greet();
// person.eat();
// person.ageUp();
// console.log(`Age: ${person.getAge()}, Height: ${person.height}, Weight: ${person.getWeight()}, Mood: ${person.mood}, Bank Account: $${person.bankAccount}`);
// console.log(`${person.getName()} started going to school.`);

// for (let i = 0; i < 10; i++) {
//     person.ageUp();
//   }
// console.log(`${person.getName()}, at ${person.getAge()} decided to go to college.`);
// console.log(`${person.getName()} studied hard to graduate.`);

// for (let i = 0; i < 10; i++) {
//     person.ageUp();
//   }

// console.log(`${person.getName()}, at ${person.getAge()} decided to buy a house after he got Hired with google`);
// console.log(`${person.getName()} lived a happy and fulfilling life.`);

// for (let i = 0; i < 38; i++) {
//     person.ageUp();
//   }
// console.log(`${person.getName()}, at ${person.getAge()} He decided to retire and want to travel arround the world.`);



// const timmy = new Person("Timmy"); // Instantiate a new Person named Timmy

// for (let i = 0; i < 5; i++) {  // Age Timmy five years
//   timmy.ageUp();
// }

// for (let i = 0; i < 5; i++) { // Have Timmy eat five times
//     timmy.eat();
//   }
  
  
//   for (let i = 0; i < 5; i++) { // Have Timmy exercise five times
//     timmy.exercise();
//   }
//   for (let i = 0; i < 4; i++) {
//     timmy.ageUp();
//   }
  
  
// const hamster = new Hamster("Gus");
// timmy.buyHamster(hamster);

  
//   for (let i = 0; i < 6; i++) { // Age Timmy to 15 years
//     timmy.ageUp();
//   }
//   for (let i = 0; i < 2; i++) { // Have Timmy eat twice
//     timmy.eat();
//   }
//   for (let i = 0; i < 2; i++) {  // Have Timmy exercise twice
//     timmy.exercise();
//   }
  
//   // Check Timmy's current state
//   console.log(`${timmy.greet()}`);
//   console.log(`${timmy.getName()}'s hamsters: ${timmy.hamsters.length}`);
//   console.log(`${timmy.getName()}'s age: ${timmy.getAge()} years`); // Check Timmy's current age
//   console.log(`Bought a hamster named ${hamster.name}. Mood: ${timmy.mood}, Bank Account: $${timmy.bankAccount}`);
//   console.log(`Age: ${timmy.getAge()}, Height: ${timmy.height}, Weight: ${timmy.getWeight()}`);


class Dinner { //class dinner
    constructor(appetizer, entree, dessert) { // 3 prorpreties appetizer, entree and dessert
      this.appetizer = appetizer;
      this.entree = entree;
      this.dessert = dessert;
    }
    listCourse() {
        console.log(`Appetizer: ${this.appetizer}`);
        console.log(`Entree: ${this.entree}`);
        console.log(`Dessert: ${this.dessert}`);
    }
    changeDessert(newDessert) {
        this.dessert = newDessert;
    }
    dinnertaste(){
        console.log('mmmmm so yummy');
    }
  }

  class Chef { //class chef is facotry for class dinner
    createDinner(appetizer, entree, dessert) {
      return new Dinner(appetizer, entree, dessert);
    }
  }
