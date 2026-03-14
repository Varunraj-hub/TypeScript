
//Arrays
    // let EmployeeNames:Array<number>=[23,12,23];
    let employeeinfo:(string|boolean)[]=["test","test",true];
    let multiArray2:(number|string)[]=["testabc",67,"abctest"];
    let NormalStringArray:Array<String>=["String1","string2"];
    let NormalNumberArray:Array<Number>=[22,33,212,12,12,22]
    let NormalBooleanArray:Array<boolean>=[true,false];

    console.log("MultiDimensionalArray: "+employeeinfo[2]);
    console.log("MultiDimensionalArray2: "+multiArray2[1]);
    console.log("NormalStringArray: "+NormalStringArray[1]);
    console.log("NormalNumberArray: "+NormalNumberArray[3]);
    console.log("NormalBooleanArray: "+NormalBooleanArray[0]);


//Index based array printing in loops

let Arrayloopstring:Array<string>=["emp1","emp2","emp3","emp3","emp4","emp5"];
for(let i=0;i<=Arrayloopstring.length;i++)
{
    console.log(Arrayloopstring[i]);
}