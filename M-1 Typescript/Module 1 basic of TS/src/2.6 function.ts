//learning function

//normal 
function add ( n1 : number, n2:number):number{
    return n1+n2
}
add(1,2)

//arrow

const add2 = (n1:number, n2:number=10):number => n1+n2;


//function in object is called method

const poorUser = {
    name : 'hossain',
    balance : 0,
    addbalance(balance : number):string{
       return `balance is ${this.balance + balance}`;
    }
}



/**
 *   call back function
 */
const array  : number[] = [1,2,4,5,6];
const newArray = array.map((i:number):number=> i*i)



/**
 * Method
 */
const Info : {
    Name : string,
    NID?: string,
    gender : 'male' | 'female' | 'others',
    BankName : 'JBL'
    contact : string,
    readonly email :  string,
    balance : number,
    addBalance: (amount:number) => string, //function 


}={
    Name: 'Hossain Ahamed',
    gender : 'male',
    balance : 0,
    contact : '01868726172',
    email : 'hossain@gmail.com',
    BankName : 'JBL',
    addBalance : function(amount):string {
        this.balance+=amount;
        return` ${amount} added to ${this.Name} account. Now Balance is ${this.balance}`
    },


}

console.log(Info.addBalance(50));
console.log(Info.addBalance(50));



// practice
