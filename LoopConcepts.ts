//for loop
//for of loop
//for in loop
//while loop
//do while loop

for(let i=1;i<=10;i++)
{
    console.log(i);
}

//Reverse Charector in string

const str="iam software engineer";
const revesed=str.split("").reverse().join("");
console.log(revesed);

//use of for loop

const str4="testme";
let revversed="";

for(let i=str4.length-1;i>=0;i--)
{
    revversed=revversed+str4[i];
}
console.log(revversed);
