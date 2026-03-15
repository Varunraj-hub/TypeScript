//never means nothing, i.e nothing holds or nothing return

function throwErrorinfo(message:string):never
{
    throw new Error(message);
}

throwErrorinfo("someError");

