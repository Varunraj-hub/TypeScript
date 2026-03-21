var num1 = 23;
var num2 = 32;
var str1 = "teststring";
var str2 = "testString2";
var bool1 = true;
var bool2 = false;
var Arr1 = [56, "test", true];
var Arr2 = [32, "test", false];
Arr1.push("testPush2");
Arr2.push("testonArr2");
function info1(b, c) {
    if (b > c) {
        return "Testing";
    }
    else {
        return "Not testing";
    }
}
function info2(x, y) {
    if (x > y) {
        return "x is big";
    }
    else {
        return "y is big";
    }
}
var nm = info1(23, 34);
console.log(nm);
var xyinfo = info2(12, 21);
console.log(xyinfo);
