// Basic Data type

//string 
let firstName = 'Hossain ' //typescript implicit data type
let lastName : string = ' Ahamed' //typescript explicit data type


let roll : number = 20100056

// boolean 
let isAdmin : boolean = false;

//undefinded 
let x : undefined = undefined;

//null 
let y : null = null;

//any type 
let d;


// -------------------------non primitive---------------------------

//array
let Name : string [] = ['hossain','ahamed'];
let rol : number[] = [12,45]


// tuple  --> array --> order --> type of values
let cordinate : [number,number] = [1,2];


let identity : [string,number]  = ['hossain',3]
identity[0] = 'ahamed';
// identity[1] = 'sjfad' //gives error since it is not number 


let info : [string,number,string] = ['ahmed',24,'rpsu']
let info2 : [string,string,number] = ['hossain','enrolment',24]