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

/**
 * -------------------------destructure--------------------
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const [, , three, ...rest] = arr;
// rest will take 4,5,6,7,8

const UserData = {
  _id: 4238,
  name: {
    fname: "hossain",
    lName: "ahamed",
  },
  contact: "ajdkfjkldsaf",
};

const {
  contact,
  name: { fname: FirstName },
} = UserData; // can be change the name, but cant set data type
//its called "Name alias", changing the name of variable is called alias ; like we did for changing the variable name in react query

/**
 *
 * -----------------type alias ----------------------1-9
 *
 */

// object
type Student = {
  name: string;
  address?: string;
};

const std1: Student = {
  name: "hossain",
};

const std2: Student = {
  name: "hossain",
  address: "dsjfsd",
};

//function
type Add = (n1: number, n2: number) => number;
const addFunction: Add = (n11, n12) => n11 + n12;
console.log(addFunction(1,2))
// ------------------------------------------------------------
