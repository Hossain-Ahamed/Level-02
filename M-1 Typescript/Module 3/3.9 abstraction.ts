{
  //abstraction  1. interface 2. abstract

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`i am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`i am stopping the engine of the car`);
    }
    move(): void {
      console.log(`i am moving the car`);
    }
    test() {
      console.log(`i am testing`);
    }
  }

  const toyota = new Car1();
  toyota.startEngine();

  /**
   * ------------------------------------------------------
   *                   using abstraction
   * -------------------------------------------------------
   */

  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;

    //normal non abstract method
    test() {
      console.log(`i am testing`);
    }
  }

  class Car2 extends Vehicle2 {
    startEngine(): void {
      console.log(`hello jello`);
    }

    stopEngine(): void {
      console.log(`i am stopping the engine of the car`);
    }
    move(): void {
      console.log(`i am moving the car`);
    }

  }

  const honda = new Car2();
  honda.startEngine();
  honda.test()

  //
}
