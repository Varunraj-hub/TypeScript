/* Functions in TS:
void,return,take parameters */

//named function
/* 
function getinformation()  // 0 parameters
{
    console.log("Hello information");
}
getinformation();

 */

function add(a:number,b:number):void
{
    console.log(a+b);
}
add(2,3); // call by value--arguments,,


/* 
function CalculateNumbers(a:number,b:number,c:number):number
{
    let total:number=a+b-c;
    return total;

}
let Result:number=CalculateNumbers(23,12,33);
console.log("Calculation Result is "+Result);
 */
/* 
function isUserActive(userName:string):boolean
{
    if(userName==="Naveen")
    {
        return true;
    }
    else if(userName=="Tom")
    {
        return false;
    }
    else
    {
        console.log(userName+"-> Not Found !");
        return false;
    }
}
if(isUserActive("Peter"))
{
    console.log("Login with Naveeen");
}
 */

//Anonymous Function:: Funtion without name -- store in variable.
/* 
let infofn=function()
{
    console.log("Anonymous Function");
}
infofn();
 */

let sum=function(x:number,y:number,z:number):number
{   
    return x+y-z;
}
let Total:number=sum(40,10,20);
console.log(Total);