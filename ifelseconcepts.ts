let a:number=23;
let b:number=43;
let c:number=45;

if(a>b && a>c)
{
    console.log("a is greater");
}
else if(b>a && b>c)
{
    console.log("b is greatet");
}
else
{
    console.log("C is greatest");
}

//ternary operator
let browser:string="test";
(browser==="chrome")?console.log("Launch Chrome Browser"):(browser==="firefox")?console.log("Launch Firefox"):console.log("Pass the correct browser");
