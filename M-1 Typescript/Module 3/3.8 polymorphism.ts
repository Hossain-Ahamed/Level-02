{
  //polymorphism

  class Person {
    getSleep() {
      console.log(`i am sleeping for 8 hours a day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`sleep 6 hour`);
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log(`sleep 4 hour`);
    }
  }

  const getSleepingHour = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHour(person1);
  getSleepingHour(person2);
  getSleepingHour(person3);
  /**
   * -----------------------------------------------------------
   * -----------------------------------------------------------
   * -----------------------------------------------------------
   */

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    constructor(public radius: number) {
      super();
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    constructor(public height: number, public width: number) {
      super();
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const rectangle1 = new Rectangle(23, 45);
  const circle2 = new Circle(10);

  getShapeArea(shape1);
  getShapeArea(circle2);
  getShapeArea(rectangle1);
  //
}
