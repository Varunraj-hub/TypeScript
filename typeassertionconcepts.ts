let messsage:any="testanymessage";
let convrted:string=<string>messsage;
console.log(convrted);

let TotalBill:any=233;
let finalBill:number=<number>TotalBill+1;
console.log(finalBill);

//anotherway to consider is using "as" keyword

let tagline:any="testmesssagetagline";
console.log(tagline as string);