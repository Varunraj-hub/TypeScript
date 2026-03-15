var a = 23;
var b = 43;
var c = 45;
if (a > b && a > c) {
    console.log("a is greater");
}
else if (b > a && b > c) {
    console.log("b is greatet");
}
else {
    console.log("C is greatest");
}
//ternary operator
var browser = "test";
(browser === "chrome") ? console.log("Launch Chrome Browser") : (browser === "firefox") ? console.log("Launch Firefox") : console.log("Pass the correct browser");
