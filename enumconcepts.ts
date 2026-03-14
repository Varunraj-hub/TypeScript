//Enum: Enumeartion- > data types: holds set of contants
//numeric
//string
//heterogenous

//numeric:

enum Browser {
    Chrome=getVersion('chrome'),
    Safari=8,
    Opera=2, //in this case firefox will be the next index value i.e 3
    Firefox=getVersion('chrome')*2
}
function getVersion(browsername:string):number{
    if(browsername=="chrome")
    {
        return 34;
    }
    else
    {
        return -2;
    }
}
console.log(Browser.Chrome);
console.log(Browser.Firefox);

//string enum concepts
enum Environment
{
    Dev="Development",
    Stage="Staging",
    Prod="Production"
}
console.log(Environment);
console.log(Environment.Stage);
console.log(Environment['Dev']);

//heterogenious enum

enum Status{
    Active = 'Active',
    Deactive=1,
    PENDING
}

console.log(Status);
console.log(Status.Active);
console.log(Status.Deactive);
console.log(Status.PENDING);