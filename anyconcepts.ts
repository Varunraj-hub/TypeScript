let num:any=23;
let str:any="teststring";
let bool:any=true;
let Arr:any[]=[56,"test",true];
Arr.push("testPush2");

function info(b:number, c:number):any{
    if(b>c)
    {
        return "Testing";
    }
    else
    {
        return "Not testing";
    }
}

let n=info(23,34);
console.log(n)