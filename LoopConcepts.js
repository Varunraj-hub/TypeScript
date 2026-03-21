//for loop
//for of loop
//for in loop
//while loop
//do while loop
/*
    for(let i=1;i<=10;i++)
    {
        console.log(i);
    //  break; if using break then only 1 loop will execute.
    }
*/
/*
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
*/
//Print values 0 2 4 6 8 10
/* for(let i=0;i<=10;i=i+2)
{
    console.log(i);
}
 */
//For..of loop
/* let numbers=[10,230,34,45,23,452,42,43];
for(let n of numbers)
{
    console.log(n);
}
 */
//for..in loop
/* let numbers=[10,230,34,45,23,452,42,43];
for(let i in numbers)
{
    console.log(i+"="+numbers[i]); //if not using numbers[i] then it will print only index,, if printing console.log(i);
} */
//While Loop,,,,print 1 to 10
/* let p=1;
while(p<=10)
{
    console.log(p);
    p++;
} */
/* use cases for while: when number of iterations are not fixed:
1. Infinite scrolling
2. wait for page loading: 2,5,10 seconds
3. wait for lement on the page: 2,3,5,10
4. Calender handling: unlimited months and year
5. webtable pagination: prev..1 2 3 4 5 6 7 ..next

uses cases for for loop: when number of iterations are fixed:
1.dropdown : Month: jan to dec:1 to 12.
*/
// do while loop
var d = 2;
do {
    console.log(d);
    d++;
} while (d <= 10);
// first iteration will print and then it check condition -- do first then condition check while
