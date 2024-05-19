{
  // instance of
  class Animal {

    constructor(name: string, species: string) {}

    makeSound() {
      console.log("i am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log("i am barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMeaw() {
      console.log("i am mewing");
    }
  }


  const isDog = (animal : Animal) : animal is Dog=>{
    return animal instanceof Dog; 
  }


  const isCat = (animal : Animal) : animal is Cat=>{
    return animal instanceof Cat; 
  }
  const isCatt = (animal : Animal) : animal is Cat =>{
    return animal instanceof Cat
  }

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark(); // since its instance of dog so it get the function of dog
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };


// smart way 



  const dog = new Dog("dog bhau", "dog");
  const cat = new Cat("cat bhau", "cat");
  const animal = new Animal("a",'a')

  getAnimal(dog);
  getAnimal(cat);
  getAnimal(animal);
  //
}
