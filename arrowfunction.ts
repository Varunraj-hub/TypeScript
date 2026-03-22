//ArrowFunction: => Fat arrrow or lambda function
//Arrow is kind of Anonymous function which has without any name
//Remove the function keyword from Anonymouos function and keep FatArrow after paranthesis

/* let info=()=>{
    console.log("Hello TS");
}

let printinfo=()=>console.log("hellow world"); //we can ignore {} as well

info();
printinfo(); */


//supplying parameters in the Arrowfunction
/* let addition=(x:number,y:number)=>x+y;
let Subtraction=(x:number,y:number)=>x-y;
let Division=(x:number,y:number)=>x/y;
let ModOperation=(x:number,y:number)=>x%y;

let Add_result=addition(23,5);
let Subtraction_Result=Subtraction(30,5);
let Division_Result=Division(50,5);
let ModOperation_Result=ModOperation(10,3);
console.log("Addition: "+Add_result);
console.log("Subtraction: "+Subtraction_Result);
console.log("Division: "+Division_Result);
console.log("Mod: "+ModOperation_Result); */


class EmployeeDetails
{
    empID:number;
    emp_name:string;
    
    constructor(empID:number,emp_name:string) 
    {
        this.empID=empID;
        this.emp_name=emp_name;   
    }
    display=()=>console.log("Name of this: "+this.empID+" is "+this.emp_name);
}


    let p=new EmployeeDetails(2345,"Tom");
    p.display();
    let q=new EmployeeDetails(4312,"Zidaan");
    q.display();
