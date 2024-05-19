{
  //
  class Counter {
  
    static count: number = 0;
    static increment() {
      return (Counter.count += 1);
    }
    static decrement() {
      return (Counter.count -= 1);
    }

 

    nonStaticincrement() {
      return (Counter.count += 1);
    }
    nonStaticdecrement() {
      return (Counter.count -= 1);
    }
  
  }

  const c1 = new Counter();
  const c2 = new Counter();

  console.log(Counter.increment());  //1
  console.log(Counter.increment()); //2

  console.log(c1.nonStaticincrement()) //3
  //
}
