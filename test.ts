let person: string = "Abhishek"; // explicit type
let last_name = "sharma" //implicit type
console.log(person) //infer 

let u: any = true;
u = "garfield";
Math.round(u); // type = any disables type checking 

let arr: string[] = [];
arr.push("4");  // explicit type array

let arr2 = []; // implicit type array
arr2.push('hello');

let arr3: readonly string[] = ["helllo"]; // readonly array cannot be mofdified

let tupples: [number, boolean, string] = [1, true, "hello"]; // tupples
let [x, y, z] = tupples; // destructing tupples

let obj: { [index: string]: string } = {};
obj["hello"] = "gh";

let obj1: { type: number, name?: string } = { type: 1 };

obj1.name = "abhishek"

//
enum temp {
    north, //
    south,
    east,
    west
}                // enums auto increment initial = 0 
console.log(temp.north);
//temp.north = "south"; // readonly property


type carYear = number;
type carName = string

type car = {
    name: carName,
    year: carYear
}

const Car: car = {               // aliases apply to all type of variables
    name: "abhishek",
    year: 2020
}

interface rect {
    height: number
    width: number
}

const Rectangle: rect = {
    height: 10,                 // Interfaces only apply to objects
    width: 20
}

const Htatus: number | string = "hello"  // Union when  a variable can be of 2 types 

console.log(Htatus.toUpperCase());   // error if htatus is a number 

function hello(x: number, y: string): number {
    // function
    return 10;
}

hello(10, "abhishek");

var numb: any = 1;
console.log((numb as string).length)

console.log(<string>numb.length)                   //ts casting (override the property of variables)





//// Typescript classes 

// typescript adds type and visibility to javascript classes

class Person {
    name: string = "abhisek";
}

const myname = new Person()
myname.name = "sharma"
console.log(myname.name)

// public : allows acces to all members of class from anywhere
// private : only allows access to class members from within the class
// protected : allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below



class Human 
{
    private name:string;
    public constructor(name:string){
        this.name=name;
    }
    private getName():string{
        return this.name;
    }
}

var firstHuman=new Human("abhishek");
// firstHuman.getName();  //Property 'getName' is private and only accessible within class 'Human'.ts(2341)


interface shape{
   getArea:()=>number
}//

class Retangle implements shape{
    public constructor(protected width: number, protected  height: number) {}
    

getArea():number {
    return this.height*this.width;
}
}
interface Shape {
    getArea: () => number;
  }
  
  class Rectngle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }


