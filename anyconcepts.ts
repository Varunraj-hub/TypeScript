let num1:any=23;
let num2:any=32;
let str1:any="teststring";
let str2:any="testString2";
let bool1:any=true;
let bool2:any=false;
let Arr1:any[]=[56,"test",true];
let Arr2:any[]=[32,"test",false];
Arr1.push("testPush2");
Arr2.push("testonArr2");

function info1(b:number, c:number):any{
    if(b>c)
    {
        return "Testing";
    }
    else
    {
        return "Not testing";
    }
}
function info2(x:number,y:number):any{
if(x>y)
{
    return "x is big";
}
else
{
    return "y is big";
}
}

let nm=info1(23,34);
console.log(nm);
let xyinfo=info2(12,21);
console.log(xyinfo);