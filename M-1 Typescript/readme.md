# TypeScript

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. TypeScript is often used in web development to build large-scale applications and is particularly popular with developers using frameworks like Angular.

- [Typescript official documentation](https://www.typescriptlang.org/docs/handbook)
- [Programming in TypeScript – Full Course
  ](https://www.freecodecamp.org/news/programming-in-typescript/)
- [Learn TypeScript – The Ultimate Beginners Guide](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/)
- [TypeScript Handbook for React Developers – How to Build a Type-Safe Todo App](https://www.freecodecamp.org/news/typescript-tutorial-for-react-developers/)

# Table of Contents

1. [Pros and Cons of Typescript](#pros-and-cons-of-typescript)
2. [Install TypeScript and TS config](#install-typescript-and-ts-config)
3. [Data Types of Typescript](#data-types-of-typescript-example)
   - [Primitive types](#primitive-data-types)
   - [Non-Primitive types](#non-primitive-data-types)
   - [Function](#function)
   - [Union and Intersection types](#union-and-intersection-types)
   - [Enum Type](#enum-type)
4. [Type Alias](#type-alias)
5. [Interface](#interfaces)
6. [Type Assertion](#type-assertion)
7. [Generic](#generic)
8. [Asynchronous Typescript](#asynchronous-typescript)
9. [Conditional Types](#conditional-types)
10. [Mapped Types](#mapped-types)
11. [Utility Types](#utility-types)
12. [Object Oriented Programming(OOP)](#object-oriented-programmingoop)
13. [Object Oriented Programming(OOP) With TypeScript](#object-oriented-programmingoop-with-typescript)
    - [Basic structure of a class](#basic-structure-of-a-class)
    - [Inheritance](#inheritance)
    - [Access modifiers](#access-modifiers)
    - [Getter and Setter function](#getter-and-setter-function)
    - [Statics](#statics)
    - [Polymorphism](#polymorphism)
    - [Abstraction](#abstraction)
    - [Encapsulation](#encapsulation)

# Pros and Cons of Typescript

Every programming languages is created to serve few purpose, so that there have pros and cons.Here are some of the key pros and cons of TypeScript:

### Pros

1. `Static Typing`: TypeScript enforces static typing, which means you can catch type-related errors at compile time rather than runtime. This can help improve code quality and catch bugs early in the development process.
2. `Enhanced Tooling`: TypeScript provides excellent tooling and editor support. Popular code editors like Visual Studio Code offer rich TypeScript integration, including auto-completion, error checking, and code navigation.
3. `Code Maintainability`: Strongly typed code is often more self-documenting and easier to understand, making it easier to maintain and refactor code bases, especially in large projects.
4. `Improved Collaboration`: The use of static types can make it easier for teams to collaborate on a project, as it provides a clear contract for functions and interfaces.
5. `Rich Ecosystem`: TypeScript has a rich ecosystem with a variety of libraries and frameworks designed to work with it, making it suitable for building complex applications.
6. `Transpilation`: TypeScript code can be transpiled into plain JavaScript, making it compatible with all major browsers and environments.

### Cons

1. `Learning Curve`: TypeScript introduces a learning curve for developers who are new to static typing. It may take time to fully grasp TypeScript's type system and its nuances.
2. `Overhead`: Adding type annotations can make the codebase slightly more verbose, which can be seen as an overhead, especially for small projects.
3. `Tooling Dependency`: TypeScript's strong tooling support means that you may rely heavily on specific editors or build tools to maximize its benefits. This can be a limitation in some development environments.
4. `Compilation Step`: TypeScript requires a compilation step before execution, which may slow down the development process compared to pure JavaScript development.
5. `Type Definitions`: While TypeScript has a rich ecosystem, not all JavaScript libraries have well-maintained type definitions, which can be frustrating when integrating third-party code.

In summary, TypeScript is a powerful language that offers many advantages for building large-scale applications, but it comes with a learning curve and some overhead. The decision to use TypeScript depends on the specific needs of a project and the preferences of the development team.

# Install TypeScript and TS config  `video 1-4`

- NVM

```bash
nvm install version_no

nvm list //for all version

nvm use version_no //to switch version

```

- Install TypeScript

```bash
  npm install -g typescript
```

- TS Config File

```bash
  tsc --init
```

  In target file `target` and `outDir` are for es version and output directory

- Ts Run

```bash
 ts-node-dev --respawn --transpile-only "2.10 mapped types.ts"
```

# Data Types of Typescript (example)

### Basis Types

- Primitive Types

  - number
  - string
  - boolean
  - null
  - undefined
  - never
  - unknown
  - void
  - symbol
- Non-Primitive types

  - Array
  - Tuple
  - Object

## Primitive Data types

```ts

// type annotations
const authorTwo: string = 'James Clear'; // explicit way of data type define
const authorOne = 'Brian Tracy'; // implicit way of data type define
// we don’t always have to write explicit type annotations. In many cases, TypeScript can even just infer the types

// basic data types
const author: string = 'Cal Newport';
const age: number = 52;
const isActive: boolean = true;
const fb: undefined = undefined;
const x: null = null;

// literal type
const alignment: 'left' | 'center' | 'right' = 'center';

// void type
function logMessage(): void {
  console.log('This is a log message.');
}

// unknown type
function processValue(value: unknown) {
  if (typeof value === 'string') {
    // You can safely use value as a string here
    console.log(value.toUpperCase());
  } else if (typeof value === 'number') {
    // You can safely use value as a number here
    console.log(value.toFixed(2));
  } else {
    console.log('Value is of an unknown type');
  }
}
processValue(a); // Works fine
processValue(b); // Works fine

// never type
function throwError(message: string): never {
  throw new Error(message);
}
```

## Non-primitive Data types

```ts
/**
 * Array
 */
const books: string[] = ['Time Management', 'Atomic Habits', 'Deep Work'];
const prices: number[] = [1, 2, 3, 4, 5];

/**
 * Tuple
 */
const coordinate: [number, number] = [10, 20];
const fullNameWithAge: [string, string, number] = ['Napoleon', 'Hill', 65];

/**
 * Object
 */
const bookOne: {
  readonly id: string;
  title: string;
  author: string;
  price: number;
  pages: number;
  isAvailable?: boolean; // optional type
  category: 'BestSeller'; // literal type
} = {
  id: 'abc123',
  title: 'Deep Work',
  author: 'James Clear',
  price: 220,
  pages: 180,
  category: 'BestSeller',
};
```

## Function

```ts
//Normal Function
function add(a: number, b: number): number {
  return a + b;
}

//arrow function
const multiply = (a: number, b: number): number => {
  return a * b;
};

// type of a function which returns a promise,
async function getUsername(): Promise<string> {
  return 'james';
}

//method
const book: {
  title: string;
  author: string;
  available: string;
  stock: number;
  addStock: (qnt: number) => string;
} = {
  title: 'Leadership',
  author: 'Brian Tracy',
  available: 'true',
  stock: 0,
  addStock: function (qnt: number): string {
    this.stock + qnt;
    return qnt + ' Books added';
  },
};

//callback
const bookList: string[] = ['Deep Work', 'Leadership', 'Atomic Habits'];
const uppercaseBookList: string[] = bookList.map((book: string): string => book.toUpperCase());

//type alias for function 
type Add = (n1 : number, n2:number) => number
const addFunction : Add = (n1,n2)=> n1+n2;
```

## Spread & Rest Operator 1-7

```ts
// rest function
const friendsGroup = (...friends: string[]) => {
  friends.forEach((i: string) => console.log(i));
};

friendsGroup("hossain", "joy");

//**          Spread */

const n1: number[] = [1, 2, 4];
const n2: number[] = [3, 5, 6];
n1.push(...n2);
console.log(n1);
```

## Destructure 1-8

```ts
const {
  contact,
  name: { fname: FirstName },
} = UserData; // can be change the name, but cant set data type
//its called "Name alias", changing the name of variable is called alias ; like we did for changing the variable name in react query

//---------Array Destructure ----
const arr = [1,2,3,4,5,6,7,8];
const [,,three, ...rest] = arr;
// rest will take 4,5,6,7,8
```

## Union and Intersection types

```ts
{
  //union

  type FrontEnd = "fakibaz" | "junior"; //string literal type
  type Backend = "pro" | "new"; //string literal type
  type Dev = FrontEnd | Backend; // union with type

  const newDev: FrontEnd = "fakibaz"; //union type er moddhe dite hbe
  const newDev2: Dev = "pro";

  //union with object
  type User = {
    name: string;
    gender: "male" | "female" | "others";
  };

  const user1: User = {
    name: "hossain",
    gender: "male",
  };

  // -------------------------------------------combination of  common and  uncommon ----------------------
  type FrontEndDev = {
    skills: string[];
    designation1: "Frontend";
  };
  type BackendDev = {
    skills: string[];
    designation2: "backend";
  };

  type FullStackDev = FrontEndDev & BackendDev;

  const FullstackDev1: FullStackDev = {
    skills: ["html", "css", "express"], //for both skills  since they are same
    designation1: "Frontend",
    designation2: "backend",
  }
```

```ts
{
 // ------------------ FUll example ------------------
  type Gender = 'male' | 'female' | 'others';
  type Indentity = {
    name: string;
    phone: string;
    age : number;
    gender : Gender;
    email ?:string;

  };

  type StudentExtends ={
    school : string,
    class : number
  }

  type TeacherExtends = {
    salary : number
  }

  type Teacher = Indentity & TeacherExtends;
  type Student = Indentity & StudentExtends;

  const teacherHossain : Teacher ={
    name : 'hossain',
     age: 24,
     gender: "male",
     phone : '01868726172',
     email : 'a@gmail.com',
     salary : 3434
  }

  const studentHossain : Student ={
    name : 'hossain',
     age: 24,
     gender: "male",
     phone : '01868726172',
     class : 12,
     school : 'RPSU'
  }
}
```

## Never type- Null - Unknown 1.11 `2.11`

- `Never type` is a type which use to error throw and never returns anything
- `nullable`  can be used as optional
- `unknown` are those which are known at the runtime

```ts
  //Ternary, optional chaining & nullish coalescing operator
  const isAdmin = null;
  const result = isAdmin ?? "Guest";
  console.log( {result} ); // guest

//unknown
  const getSpeedInMeterPerSecond = (value :unknown)=>{
    if(typeof value==="number"){
      console.log("number")
    }else{
      console.log(typeof value)
    }
  }

  getSpeedInMeterPerSecond(1000)


//never type
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError('galti se ')
}
```

## Enum type

```ts
enum Role {
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
  OPERATOR = 'OPERATOR',
}

const admin: string = Role.ADMIN;
const superAdmin: string = Role.SUPER_ADMIN;
const operator: string = Role.OPERATOR;
```

## Type Alias 1-9  `2.7 +`

Type alias is a way to create a new name for an existing type or to define complex types that may be used multiple times

```ts
// type alias
type Address = {
  city: string;
  country: string;
};

type Student = {
  firstName: string;
  lastName: string;
  age: number;
  gender: 'male' | 'female';
  contactNo?: string;
  address?: Address;
};

const studentOne: Student = {
  firstName: 'James',
  lastName: 'Clear',
  age: 60,
  gender: 'male',
};

type CreateFullName = (fName: string, lName: string) => string; // for function
const createFullName: CreateFullName = (fName, lName) => `${fName} ${lName}`;
```

## Interfaces  2-2 `2.2`

An interface is a way to define type for the structure of an object. It describes the properties, methods, and their types that an object should have. Interfaces are a fundamental part of TypeScript and are used for defining object shapes and ensuring type checking.

```ts
// interface only use to define  the structure of Object, not use for any primitive types
interface Author {
  firstName: string;
  lastName: string;
}

const authorOne: Author = {
  firstName: 'James',
  lastName: 'Clear',
};

// interface can be extends with interface and type alias
interface AuthorWithGenre extends Author {
  genre: 'motivation' | 'thriller';
  status: 'active' | 'passed-away';
}

//array w interface
 interface Roll2 {
    [index: number]: number; //prottek index er jnno  number
  }
  const rollNumber2: Roll2 = [1, 2, 3, 4];

  // function
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add2: Add2 = (num1, num2) => num1 + num2;

const authorTwo: AuthorWithGenre = {
  firstName: 'Cal',
  lastName: 'Newport',
  genre: 'motivation',
  status: 'passed-away',
};

// implements interface in class
class User implements Author {
  public firstName: string;
  public lastName: string;

  constructor(firstName: string, lastName: string, s) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

[Differences Between Type Aliases and Interfaces](https://blog.bitsrc.io/type-vs-interface-in-typescript-cf3c00bc04ae)

## Type Assertion 2-1   `2.1`

Type assertion in TypeScript is a way to tell the **TypeScript compiler that you know more about the type of a value tha**n it does. It's like telling TypeScript, "Trust me, I've checked the type, and it's safe." Type assertion is useful in situations where you have more specific knowledge about the types in your code than TypeScript can infer.

Type assertion can be done in two ways: with angle brackets (<>) or with the as keyword.

- **Using angle brackets** (`<>`)

```ts
  let someValue: any = 'Hello, TypeScript!';
  let strLength: number = (<string>someValue).length;

  console.log(strLength); // Output: 16
```

- **Using `as` keyword**

  ```ts
  let someValue: any = 'Hello, TypeScript!';
  let strLength: number = (someValue as string).length;

  console.log(strLength); // Output: 16
  ```
- **other examples**

  ```ts
  let anything: any;
  anything = 'Hello, World!';
  (anything as string).toUpperCase();

  //--------------------------------
  const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === 'string') {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is: ${convertedValue}`;
    } else if (typeof value === 'number') {
      return value * 1000;
    }
  };

  const resultOne = kgToGram(2) as number;
  const resultTwo = kgToGram('5') as string;

  ```
- **Try catch Block**

  ```ts

  type CustomError = {
    message: string;
  };
  try {
    console.log('something');
  } catch (error) {
    console.log((error as CustomError).message);
  }
  ```

## Generic 2.3 `2.3+2.4`

Generics in TypeScript allow you to create reusable components, functions, and classes that can work with a variety of data types. They provide a way to write code that is both flexible and type-safe. Generics are especially useful when you want to create functions or classes that work with different data types without losing type information.

- Basic Example of Generic types

  ```ts
  type GenericArray<T> = Array<T>;

  const srtArr: GenericArray<string> = ['a', 'b'];
  const numArr: GenericArray<number> = [1, 2];
  const boolArr: GenericArray<boolean> = [true, false];

  type Name = {
    id: string;
    fName: string;
    lName: string;
  };

  const objArr: GenericArray<Name> = [
    { id: 'sdadsa', fName: 'james', lName: 'clear' },
    { id: 'afsdfa', fName: 'james', lName: 'clear' },
  ];

  /**
   * Generic Tuple
   */

  type GenericTuple<X, Y> = [X, Y];

  const nameAge: GenericTuple<string, number> = ['Napoleon Hill', 47];
  const genreStatus: GenericTuple<string, string> = ['motivation', 'active'];

  const nameWithId: GenericTuple<Name, string> = [
    { id: 'afsdfa', fName: 'james', lName: 'clear' },
    '1232',
  ];
  ```
- Generic with Interface

  ```ts
  /**
   * Generic with Interface
   */

  interface Developer<T, X, Y, Z = null> {
    name: string;
    email: string;
    skills: T;
    address: X;
    remote?: Y;
    graduated?: Z;
  }

  const jrDeveloper: Developer<string, { county: string; city: string }, null> = {
    name: 'example',
    email: 'example@gmail.com',
    skills: 'Front-end Development',
    address: { county: 'Bangladesh', city: 'Dhaka' },
  };
  const srDeveloper: Developer<string[], string, boolean, boolean> = {
    name: 'example 2',
    email: 'example2@gmail.com',
    skills: ['Front-end Development', 'Backend-Development'],
    address: 'Dhaka, Bangladesh',
    remote: true,
    graduated: true,
  };
  ```
- Function with Generic - regular

```ts
  /**
   *  Function with generics
   */
  function identity<T>(arg: T): T {
    return arg;
  }

  // Usage:
  let value: number = identity(42); // The function returns a number.
  let message: string = identity('Hello, TypeScript!'); // The function returns a string. //
```

- Function with Generic - Tuple

```ts
  const createTuple = <X, Y>(first: X, last: Y): [X, Y] => {
    return [first, last];
  };


  const fullName = createTuple<string, string>('Casciaro', 'Mammino');

```

- Function with Generic - Object

```ts
  /* function*/

const addCourseToStudent = <T>(student : T)=>{
   const course = 'next level web dev'
   return {
       ...student,
       course
       }
   }

const std1  = addCourseToStudent ({name : 'x', email : 'djs@gmail.com', dev : 'nlwd'})
```

## Constraints in typescript  2-6 `2.6`

**Generic constraints allow you to restrict the types that can be used as type parameters in a generic function or class.**

Constraints ensure that **you can only use types that meet certain criteria,** such as having specific properties or implementing certain interfaces. This helps you write more specific and type-safe generic code.

```ts


interface Book {
  id: string;
  name: string;
  author: string;
}

const addBook = <T extends Book>(info: T) => {
  return { ...info };
};

const newBookOne = addBook({
  id: '123',
  name: 'Think and Grow Rich',
  author: 'Napolion Hill',
  price: 120,
});

const newBookTwo = addBook({
  id: '123',
  name: 'Think and Grow Rich',
  author: 'Napolion Hill',
  isAvailable: false,
});

```

- generic Constraints with keyof operator 2-7 `2.7`

```ts
;    type Vehicle ={
        bike : string;
        car : string;
        ship : string;
    }
    type Owner2 = keyof Vehicle
    const person2 : Owner2 = "car";

  // get property of object with checking
  const getPropertyValue=<X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "hossain",
    age: 322,
    address: "asdjfjlasdjflkasdjflksdajfjsdjf",
  };

  console.log(getPropertyValue(user, "name"));

```

## Asynchronous TypeScript - 2-8 `2.8`  Promise

```ts
 type Types = {
    message: string;
  };

  const createPromise = (): Promise<Types> => {
    return new Promise<Types>((resolve, reject) => {

      const data: Types = {
        message: "dsfafkj",
      };

      if (data) {
        resolve(data);
      } else {
        reject("failed to load");
      }
    });
  };

  const showData = async (): Promise<Types> => {
    const data: Types = await createPromise();
    console.log(data);
    return data;
  };

  showData();

//// -------- example -----------
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const getTodo = async (): Promise<ITodo | undefined> => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

console.log(getTodo());
```

## Conditional types 2-9 `2.9`

Conditional types are typically used in TypeScript to define types that depend on other types, often in the context of generics and utility types.

```ts

type a = null;
type b = undefined;

type A = a extends null ? true : false;

//depeding on the value of a the vlaue will be chaged

//---------------------------------------------------

type Vehicles = {
  bike: string;
  car: string;
  train: string;
  plane: string;
};

type AvailableVehicle<T> = T extends keyof Vehicles ? true : false;

type IsBikeAvailable = AvailableVehicle<'bike'>;  // true
type IsTructorAvailable = AvailableVehicle<'tructor'>; //false

```

## Mapped Types  2-9 `2.9`

Mapped types are a powerful and flexible feature in TypeScript that allow you to create new types by transforming the properties of an existing type. They are particularly useful for creating utility types that modify or extract properties from other types in a concise and generic way. Mapped types leverage key remapping and type manipulation to generate new types based on existing ones.

```ts
type Area = {
  width: number;
  height: number;
};

type Width = Area['width']; // lookup type

type AreaAsString = {
  [key in keyof Area]: string;
};

//---------------------------------------
type GenericArea<T> = {
  [key in keyof T]: T[key];
};

const area1: GenericArea<{ width: string; height: number }> = { height: 2, width: '3' };

```

- Mapped types - `readonly`

```ts
type ReadonlyType<T> = {
  readonly [K in keyof T]: T[K];
};

type MyPerson = {
  name: string;
  age: number;
};

type ReadonlyPerson = ReadonlyType<MyPerson>; // { readonly name: string; readonly age: number; }

```

- mapped types - `Partial`

```ts
type PartialType<T> = {
  [K in keyof T]?: T[K];
};

type PartialPerson = PartialType<MyPerson>; // { name?: string; age?: number; }

```

- Mapped type - `Pick`

```ts
type PickType<T, K extends keyof T> = {
  [P in K]: T[P];
};

type NameOnly = PickType<MyPerson, 'name'>; // { name: string; } // another one could be absent
```

Mapped types provide a powerful way to create generic and reusable type transformations in TypeScript, making your code more maintainable and less error-prone by reducing the need for manual type declarations. They are commonly used in libraries and frameworks to provide generic type utilities.

## Utility types -2-11 - see code

```ts
type User = {
  firstName: string;
  lastName: string;
  email: string;
  contactNo: string;
};

// Pick - Pick specific fields type
type Email = Pick<User, 'email'>;
type Name = Pick<User, 'firstName' | 'lastName'>;

// Omit - remove specific fields type
type ContactInfo = Omit<User, 'firstName' | 'lastName'>;

type Address = {
  city: string;
  state?: string;
  zipCode?: string;
  country: string;
};

// Required - Make Required from all optional fields
type RequiredAddress = Required<Address>;

// Partial - make optional from all Required field
type PartialAddress = Partial<Address>;

// Readonly - cannot modified that field
type UserReadonly = Readonly<User>;

// Record - define dynamic type of an object
const emptyObject: Record<string, unknown> = {
  firstName: 'Mr.',
  lastName: 'Example',
  age: 26,
};
```

# Object Oriented Programming(OOP)

Object-oriented programming (OOP) is a programming paradigm or style that organizes and models software as a collection of objects, each of which represents an instance of a class.

## 4 main pillars of OOP (AEIP shortcut)

- `Inheritance`: The ability of creating a new class from an existing class. Inheritance is when an object acquires the property of another object. Inheritance allows a class to acquire the properties and behavior,
- `Polymorphism`: Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables the same interface (method name) to be used for different data types or objects, and it provides flexibility in method implementation.
- `Abstraction`: Hiding the implementation details inside and providing the necessary method to work.
- `Encapsulation`: The action of enclosing something or in a capsule. Encapsulation is the concept of bundling data and methods that operate on that data into a single unit, an object. Encapsulation means that each object in your code should control it's own state. State is the current snapshot.

## Basic structure of a class 3-1 `3.1`

Classes are the blueprints or templates for creating objects. They define the structure, attributes, and methods that objects of that class will have. Objects, on the other hand, are instances of classes that hold specific data and can perform actions.

```ts
class Book {
  id: string;
  name: string;
  author: string;

  constructor(id: string, name: string, author: string) {
    this.id = id;
    this.name = name;
    this.author = author;
  }

  printBook() {
    console.log({
      id: this.id,
      name: this.name,
      author: this.author,
    });
  }
}

const bookOne = new Book('1', 'Deep Word', 'Cal Newport');
bookOne.printBook();

```

- ------------- Short Hand - parameter properties

```ts
// ------------- Short Hand ------------------------
class BookShortHand {
  // parameter properties
  constructor(public id: string, public name: string, public author: string) {}

  printBook() {
    console.log({
      id: this.id,
      name: this.name,
      author: this.author,
    });
  }
}

const bookTwo = new BookShortHand('1', 'Deep Word', 'Cal Newport');
bookTwo.printBook();
```

## Inheritance

The ability of creating a new class from an existing class. Inheritance is when an object acquires the property of another object. Inheritance allows a class to acquire the properties and behavior

```ts
class Person {
  public id: string;
  public name: string;
  public email: string;

  constructor(name: string, email: string) {
    this.id = Date.now().toString();
    this.name = name;
    this.email = email;
  }

  print() {
    console.log({ name: this.name, email: this.email });
  }
}

class Student extends Person {
  public department: string;
  constructor(name: string, email: string, department: string) {
    super(name, email);
    this.department = department;
  }

  printStudent(): void {
    console.log({
      name: this.name,
      email: this.email,
      department: this.department,
    });
  }
}

class Teacher extends Student {
  public designation: string;

  constructor(name: string, email: string, department: string, designation: string) {
    super(name, email, department);
    this.designation = designation;
  }

  printTeacher(): void {
    console.log({
      name: this.name,
      email: this.email,
      department: this.department,
      designation: this.designation,
    });
  }
}

const person = new Person('Mr. Person', 'person@gmail.com');
const student = new Student('Mr. Student', 'student@gmail.com', 'EEE');
const teacher = new Teacher('Mr. Teacher', 'teacher@gmail.com', 'EEE', 'Lecturer');

person.print();
student.print();
teacher.print();
```

## Type guards & in guard 3-3 `3.3`

A type guard is some expression that performs a runtime check that guarantees the type in some scope

- type guard

```ts
  type Alphanumeric = string | number;

  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };


  console.log(add(2,3))
  console.log(add('2','3'))
```

- In Guard

```ts
 type NormalUser = {
    name : string;
  }

  type AdminUser ={
    name : string;
    role : "admin";
  }


  const getUser = (user : NormalUser | AdminUser) =>{
  

    if('role' in user){  // in Guard
        // type guard ==> it knows role exists

        console.log(`my name is ${user.name}, and role is ${user.role}`)
    }else{
        console.log(`my name is ${user.name}`)
    }
  }

```

### Type guard using OOP 3-4

- Type narrowing is a process of refining or narrowing down the type using certain conditions with a particular code block. Here we specifies the type

```ts

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

```

- To check type used `instaneof` => it checked the instance
- instead of boolean return => `is` used. it specifies it only that specific type

```ts

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

```

```ts
// smart way

  const dog = new Dog("dog bhau", "dog");
  const cat = new Cat("cat bhau", "cat");
  const animal = new Animal("a",'a')

  getAnimal(dog);
  getAnimal(cat);
  getAnimal(animal);

```

## Access modifiers 3-5 `3.5,3.6`

```ts
/**
 *  - readonly   => cannot modify or update
 *  - public     => can access anywhere
 *  - private    => only accessible within class, cannot be accessible inside of inherited class
 *  - protected  => accessible within own class, also inherited class
 */

class BankAccount {
  public readonly id: string;
  protected _name: string;
  private _balance: number;

  constructor(id: string, name: string, balance: number) {
    this.id = id;
    this._name = name;
    this._balance = balance;
  }

  deposit(amount: number) {
    this._balance += amount;
  }

  getAccountInfo() {
    return { id: this.id, name: this._name, ballance: this._balance };
  }
}

const bankAccountOne = new BankAccount('1', 'Mr. Z', 100);
```

## Getter and Setter function `3.5,3.6`

```ts
class ModuleFinished {
  private count = 5;

  constructor() {}

  get finishedModule(): number {
    return this.count;
  }

  set addModule(val: number) {
    this.count = this.count + val;
  }
}

const course = new ModuleFinished();
// getter function of ModuleFinished class, invoking system is like accessing object
// can access like a property of an object
console.log(course.finishedModule);

//setter function
course.addModule = 1;
course.addModule = 2;
console.log(course.finishedModule);
```

## Statics 3-7 `3.7`

In object-oriented programming (OOP), the static keyword is used to define properties and methods that belong to the class itself, rather than to instances (objects) of the class. These static members are shared across all instances of the class and can be accessed using the class name rather than an instance.

```ts
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
```

## Polymorphism

If any particular method of any class, redesigned on other inherited class then we get different output, it is Polymorphism.

```ts
class Person {
  public id: string;
  public name: string;
  public email: string;

  constructor(name: string, email: string) {
    this.id = Date.now().toString();
    this.name = name;
    this.email = email;
  }

  print() {
    console.log({ name: this.name, email: this.email });
  }
}

class Student extends Person {
  public department: string;
  constructor(name: string, email: string, department: string) {
    super(name, email);
    this.department = department;
  }

  print() {
    console.log({
      name: this.name,
      email: this.email,
      department: this.department,
    });
  }
}

class Teacher extends Student {
  public designation: string;

  constructor(name: string, email: string, department: string, designation: string) {
    super(name, email, department);
    this.designation = designation;
  }

  print() {
    console.log({
      name: this.name,
      email: this.email,
      department: this.department,
      designation: this.designation,
    });
  }
}

const person = new Person('Mr. Person', 'person@gmail.com');
const student = new Student('Mr. Student', 'student@gmail.com', 'EEE');
const teacher = new Teacher('Mr. Teacher', 'teacher@gmail.com', 'EEE', 'Lecturer');

person.print();
student.print();
teacher.print();
```

## Abstraction

Abstraction in programming refers to the concept of hiding complex implementation details and exposing only the necessary information or functionalities to the user.

```ts
//------------------------
// Using interface
//------------------------
interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

//implements of properties in class
interface CountLikes {
  likes: number;
}

//implements of methods in Class
interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto, Story, CountLikes {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public likes: number
  ) {}

  createStory(): void {
    console.log({
      cameraMode: this.cameraMode,
      filter: this.filter,
      burst: this.burst,
      likes: this.likes,
    });
  }
}

//------------------------
// Using Abstract class => cannot create instance of any abstract class
//------------------------
abstract class Shape {
  constructor(protected color: string) {}

  abstract getArea(): number; // Abstract method without implementation
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number, color: string) {
    super(color);
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const redCircle = new Circle(5, 'red');
const blueRectangle = new Rectangle(4, 6, 'blue');

console.log(redCircle.getArea()); // Output: 78.53981633974483
console.log(blueRectangle.getArea()); // Output: 24
```

## Encapsulation

Encapsulation is one of the fundamental principles of object-oriented programming (OOP). It involves bundling data (attributes or properties) and methods (functions) that operate on that data into a single unit, called an object. This unit is responsible for controlling access to its internal state and ensuring that data remains in a consistent and valid state. Encapsulation promotes data hiding and provides a way to protect data from unauthorized access and modification.

```ts


class Student {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Getter method for 'name'
  public getName(): string {
    return this.name;
  }

  // Setter method for 'name'
  public setName(name: string): void {
    this.name = name;
  }

  // Getter method for 'age'
  public getAge(): number {
    return this.age;
  }

  // Setter method for 'age'
  public setAge(age: number): void {
    if (age >= 0) {
      this.age = age;
    }
  }
}

const student = new Student('Alice', 20);

// Accessing and modifying properties through getter and setter methods
console.log(student.getName()); // Output: Alice
console.log(student.getAge()); // Output: 20

student.setName('Bob');
student.setAge(25);

console.log(student.getName()); // Output: Bob
console.log(student.getAge()); // Output: 25
```
