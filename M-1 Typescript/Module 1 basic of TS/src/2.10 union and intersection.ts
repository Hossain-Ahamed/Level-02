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
  };


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
