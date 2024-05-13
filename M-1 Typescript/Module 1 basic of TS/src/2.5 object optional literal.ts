// Reference type ==> Object

const user: {
  FirstName: string;
  middleName?: string; //optional ?:
  lastName: string;
  isMarried: boolean;
  readonly email : string;//read only doesnt give permssion to change
  company: "Programming Hero"; //type --> literal types // u cant change
} = {
  FirstName: "hossain",
  lastName: "ahamed",
  isMarried: false,
  email : 'hossainahamed6872@gmail.com',
  company: "Programming Hero",
};

// user.company = "change name "  // chnage is not allowed 

// user.email ='dsaf'; // chnage is not allowed because read only
console.log(user.FirstName)

