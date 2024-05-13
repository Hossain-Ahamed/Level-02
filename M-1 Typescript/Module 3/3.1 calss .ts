{
  //

  class Animal {


    // private name: string;
    // private species: string;
    // private sound: string;

    // constructor(name: string, species: string, sound: string) {
    //   this.name = name;
    //   this.species = species;
    //   this.sound = sound;
    // }


    //parameter propertis  - short hand
    constructor(private name: string, public species: string, private sound: string){}


    makeSound() {
      console.log(`${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German shepherd", "dog", "bho bho");

  const cat = new Animal("Persian", "cat", "mew mew");

  cat.makeSound();
  dog.makeSound();
 
  
  
  

  //
}
