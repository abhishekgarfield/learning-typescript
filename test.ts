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





