//Typescript provides concept of function overloading
//you can have multiple functions
//1.same name but different parameters type and return types
//however number of parameter should be same.

function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:boolean,b:boolean):boolean;

//function implementation adding below
function add(a:any,b:any):any
{
    return a+b;
}

let s1=add(22,11);//33 -- Added both number value
let s2=add("Automation","Testing");//output -- AutomationTesting (added both string)
let s3=add(true,false);//Added true and false---true means 1+false means 0, ie, 1+0=1

console.log(s1);
console.log(s2);
console.log(s3);