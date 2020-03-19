//supper class
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
}

//class extention for Dog
class Dog extends Animal {
  sounds() {
    return `Dog ${this.sound}`;
  }
  eat() {
    return `${this.name} eats`;
  }
}

var dog = new Dog("Rax", "Barks");
display(dog.eat());
display(dog.sounds());

console.log(" ");

//class extention for Cat
class Cat extends Animal {
  eat() {
    return `${this.name} eats`;
  }
  sounds() {
    return `Cat ${this.sound}`;
  }
}

var cat = new Cat("Stormy", "meows");
display(cat.eat());
display(cat.sounds());

//Display function
function display(content) {
  console.log(content);
}

class Home {
  constructor() {
    this.myArray = [];
    this.sound = [];
  }
  adoptPet(pet) {
    if (this.myArray.indexOf(pet) !== -1) {
      console.log("not ok at all");
    } else {
      this.myArray.push(pet);

      console.log("totaly ok");
    }
  }

  makeAllSounds() {
    for (let i = 0; i < this.myArray.length; i++) {
      this.sound.push(this.myArray[i].sounds());
    }
    return this.sound.join("\n");
  }
}
console.log("");
var home = new Home();
var dog = new Dog();
var cat = new Cat("Cat", "meows");
var dog1 = new Dog("Dog", "barks");
var dog2 = new Dog("Dog", "barks");

home.adoptPet(dog2);
home.adoptPet(dog2);
home.adoptPet(dog1);
home.adoptPet(cat);
console.log("");
console.log(home.makeAllSounds());
