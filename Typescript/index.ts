//Annotations
//Strings
let myName:string="hola"
console.log(myName)

//Numbers
let myNumber:number=2

//Boolean
let myBool:boolean=false


//Type Inference
let tech='TypeScript'
//tech=12 -- This is a mistake 
console.log(typeof tech);

//Any Type
let color:any = 'White'
color()
color=12
//Con any le puedo dar cualquier valor que quiera, mucho cuidado con esto.

//Function Parameters Annotations
//Regular Function
function addOne (num: number){
    return num+1;
}
const result = addOne(3)

//Arrow Function
const double = (x: number, y: number)=>x*y;
const res= double(2,10);


//--------------------------------------------------------------------------------

//Default Params Value
function greet(person='Value'){
    return person
}
const res2 = greet()


//Return Annotations
//Regular Func
function double1(x:number):number{
    return x * x
}

//Arrow Func
const doyble3=(x: number, y: number):number =>x*y

//--------------------------------------------------------------------------------


//Void
function message(message:string):void{
 //No hay un return entonces void lo determina como vacio
}


//Never
//Use when
//A function that always throws an error, A function that has an infinite loop, A variable that can never have a value
function throwError(msg: string):never{
    throw new Error(msg);
}

function infiniteLoop():never{
    while (true){

    }
}

let x:never

//Array Types
//Using the square bracket notation [] to indicate an array of a specific type
const numbers:number[]=[1,2,3,4]

//Using the generic Array<type> notation to indicate an array of a specific type
const names:Array<string>=['1','2'] //Ya no se usa


//Multidimensional Array
const matrix: number [][]=[
    [1,2],
    [1,3]
]

//--------------------------------------------------------------------------------
//Objects
const person: {firstName: string; lastName: string}={
    firstName:"John",
    lastName:"Doe",
}


//Function Parameters
function printUser():{name:string; age:number;}{
    return{
        name:'Jose',
        age:20,
    }
}

//--------------------------------------------------------------------------------

//Type Aliases
//Defino como un nombre personalizado el tipo de dato que luego peude utilizarse para definir
type User={
    name:string;
    age:number;
    location:string;
}

const printUserInfo = (user:User) =>{
    return user
}

const res5=printUserInfo({name:'Alex',age:20,location:"usa"})

//Optional Properties and read only
//Read Only means that we cant change the value of it
type Person={
    name:string;
    age:number;
    readonly location:string;
    email?:string;
}

const alice:Person={name:'Alice',age:30,location:'USA'}
const matt:Person={name:'Alice',age:30,location:'USA',email:'random@gmail.com'}

//--------------------------------------------------------------------------------

//Intersection Types
type Person1={
    name:string;
    age:number;
}

type Employee={
    id:number;
    title:string;
}

type trabajdor = Person1 & Employee;

const mark:trabajdor={
    name:'ALICE',    
    age:22,
    id:1748,
    title:'Engineer'
}

//--------------------------------------------------------------------------------
//Unions
//Basicamente puede ser uno de los tipos en este caso o un numero o un array de strings y existen mas combinaciones
let myVar: number|string;
let myVar2: number|string[];
const items: (number|string)[]=[1,4,"Hola"]

//--------------------------------------------------------------------------------
//Literal Types
let favColor: 'red'|'blue'
//favColor='red'; Good Valid
//favColor='orange'; Error Invalid

//--------------------------------------------------------------------------------
//Tuples
//Cada elemento en un array puede tener diferentes tipos
let myTuple:[string,number]=["hello",42];

//--------------------------------------------------------------------------------
//Enums
enum WeatherCodition{
    Sunny="Sunny",
    Cloudy="Cloudy",
    Rainy="Rainy",
    Snowy="Snowy",
}

const currentWeather = WeatherCodition.Snowy

//--------------------------------------------------------------------------------
//Class Properties Annotation

class Persona{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name=name;
        this.age-age
    }
}

const persona = new Persona('john',20)

//--------------------------------------------------------------------------------
//Generic Function

function printInfo<T>(x: T):T{
    return x
}

const str = printInfo<string>("Hello")
const num = printInfo<number>(3)

//--------------------------------------------------------------------------------
//Type Narrowing
type MyType1=string|number

function example(value:MyType1):void{
    if(typeof value==="string"){
        //algo
    }else{
        //algo
    }
}


//--------------------------------------------------------------------------------
//Instance of

//Intersection types
