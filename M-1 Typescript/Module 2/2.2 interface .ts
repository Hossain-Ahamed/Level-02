{
  //interface
  interface User {
    name: string;
    age: number;
  }

  //way 1
  type UserWithRole1 = User & { role: string };

  //way 2
  interface UserWithRole2 extends User {
    role: string;
  }

  const user1: User = {
    name: "hossain",
    age: 34,
  };

  //way 1 implement  using type
  const userWithRole1: UserWithRole1 = {
    name: "usere2",
    age: 12,
    role: "admin",
  };

  //way 2 implement using interface
  const userWithRole2: UserWithRole2 = {
    name: "usere2",
    age: 12,
    role: "admin",
  };

  //array with interface
  type Roll1 = number[];
  const rollNumber1: Roll1 = [1, 2, 3, 4];

  interface Roll2 {
    [index: number]: number; //prottek index er jnno  number
  }
  const rollNumber2: Roll2 = [1, 2, 3, 4];

  // function
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add2: Add2 = (num1, num2) => num1 + num2;

  console.log(add2(1,2))
}
