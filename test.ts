let person: string ="Abhishek"; // explicit type
let last_name="sharma" //implicit type
console.log(person) //infer 

let u :any =true;
u="garfield";
Math.round(u); // type = any disables type checking 

let arr :string[]=[];
arr.push("4");  // explicit type array

let arr2=[]; // implicit type array
arr2.push('hello');

let arr3 :readonly string[]=["helllo"]; // readonly array cannot be mofdified

let tupples: [number,boolean,string]=[1,true,"hello"]; // tupples
let [x,y,z]=tupples; // destructing tupples

let obj:{[index:string]:string}={};
obj["hello"]="gh";

let obj1:{type:number,name?:string}={type:1};

obj1.name="abhishek"


enum temp{
    north,
    south,
    east ,
    west
}                // enums auto increment initial = 0 
console.log(temp.north); 
temp.north="south"; // readonly property


type carYear=number;
type carName=string

type car={
    name:carName,
    year:carYear 
}

const Car:car={               // aliases apply to all type of variables
name:"abhishek",
year:2020
}

interface rect{
    height:number
    width:number
}

const Rectangle:rect={
    height:10,                 // Interfaces only apply to objects
    width:20
}

const Htatus:number | string ="hello"  // Union when  a variable can be of 2 types 

console.log(Htatus.toUpperCase());   // error if htatus is a number 

function hello(x:number,y:string):number{
                                                // function
    return 10;
}

hello(10,"abhishek");







