{
  // 3.3 type guards

  // type of --> type guard

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



  // in guard

  type NormalUser = {
    name : string;
  }

  type AdminUser ={
    name : string;
    role : "admin";
  }


  const getUser = (user : NormalUser | AdminUser) =>{
    

    if('role' in user){
        // type guard ==> it knows role exists

        console.log(`my name is ${user.name}, and role is ${user.role}`)
    }else{
        console.log(`my name is ${user.name}`)
    }
  }


  
  const normal : NormalUser ={
    name : 'hossain'
  }

  const admin : AdminUser ={
    name : 'admin',
    role : 'admin'
  }

  getUser(normal);

  getUser(admin);
  



  //
}
