let userid:(number|string);
userid=23;
userid="teststring";

function getuserinforomation(customerID:(number|string))
{
    if(typeof(customerID)==='number')
    {
        return 90001+"_testnumberlogic";
    }
    else if(typeof(customerID)==='string')
    {
        return "teststring only";
    }
}

console.log(getuserinforomation("test"));