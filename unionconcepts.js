var userid;
userid = 23;
userid = "teststring";
function getuserinforomation(customerID) {
    if (typeof (customerID) === 'number') {
        return 90001 + "_testnumberlogic";
    }
    else if (typeof (customerID) === 'string') {
        return "teststring only";
    }
}
console.log(getuserinforomation("test"));
