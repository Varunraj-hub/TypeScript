//Tuple: Fixed Size
//tuple vs Array
//Array: dynamic : runtime more value can be added

let person:[string,number][]=[["Naveen",23],["Viana",2],["test",23]];
console.log(person[0]);

let Customer:[string,number]=["Naveen",23];
Customer.push("addtest",43);
console.log(Customer);