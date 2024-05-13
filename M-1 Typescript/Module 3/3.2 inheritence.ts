{
  //
  // inheritence

  class Person {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}

    getsleep(numOfHour: number) {
      console.log(`${this.name} will sleep for ${numOfHour}`);
    }
  }

  class Student extends Person {
   
     constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  
  }

  const std1 = new Student("arli", 45, "china");
  std1.getsleep(5);


  class Teacher extends Person{
    constructor(name: string, age: number, address: string , public designation : string) {
      super(name, age, address);
    }

    takeClass(numOfClass : number){
      console.log(`${this.name} will take ${numOfClass} classes`)
    }

  }


  const teacher1 = new Teacher('alu',56,'bolbona','achul');
  teacher1.takeClass(5)

  //
}
