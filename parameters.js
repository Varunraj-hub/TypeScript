//optional Parameters
function setDetails(name, age, mesg) {
    if (mesg === void 0) { mesg = "Hello"; }
    return mesg + "Name: " + name + ",Age: " + age;
}
console.log(setDetails("testname", 67));
console.log(setDetails("second name"));
console.log(setDetails("Tom", 23, "Hey! "));
