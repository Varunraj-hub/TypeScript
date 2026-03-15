var num = 23;
var str = "teststring";
var bool = true;
var Arr = [56, "test", true];
Arr.push("testPush2");
function info(b, c) {
    if (b > c) {
        return "Testing";
    }
    else {
        return "Not testing";
    }
}
var n = info(23, 34);
console.log(n);
