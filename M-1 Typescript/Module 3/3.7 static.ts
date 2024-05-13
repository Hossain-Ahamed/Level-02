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
  }

  const c1 = new Counter();
  const c2 = new Counter();

  Counter.increment();
  Counter.increment();

  //
}
