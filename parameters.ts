//optional Parameters
//default parameters

function setDetails(name:string,age?:number,mesg:string="Hello"):string //passed Optional parameter using ? mark and assigned "hello" string for default parameter
{
    return mesg+"Name: "+name+",Age: "+age;
}

console.log(setDetails("testname",67));
console.log(setDetails("second name"));//optional parameter will not print, and it will print undefined since not printed, and default parameter take its value even though its not passed here,
console.log(setDetails("Tom",23,"Hey! "));//using "Hey!" string by overloading here, so passed string will be printed