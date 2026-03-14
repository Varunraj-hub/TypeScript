//Enum: Enumeartion- > data types: holds set of contants
//numeric
//string
//heterogenous
//numeric:
var Browser;
(function (Browser) {
    Browser[Browser["Chrome"] = getVersion('chrome')] = "Chrome";
    Browser[Browser["Safari"] = 8] = "Safari";
    Browser[Browser["Opera"] = 2] = "Opera";
    Browser[Browser["Firefox"] = getVersion('chrome') * 2] = "Firefox";
})(Browser || (Browser = {}));
function getVersion(browsername) {
    if (browsername == "chrome") {
        return 34;
    }
    else {
        return -2;
    }
}
console.log(Browser.Chrome);
console.log(Browser.Firefox);
//string enum concepts
var Environment;
(function (Environment) {
    Environment["Dev"] = "Development";
    Environment["Stage"] = "Staging";
    Environment["Prod"] = "Production";
})(Environment || (Environment = {}));
console.log(Environment);
console.log(Environment.Stage);
console.log(Environment['Dev']);
//heterogenious enum
var Status;
(function (Status) {
    Status["Active"] = "Active";
    Status[Status["Deactive"] = 1] = "Deactive";
    Status[Status["PENDING"] = 2] = "PENDING";
})(Status || (Status = {}));
console.log(Status);
console.log(Status.Active);
console.log(Status.Deactive);
console.log(Status.PENDING);
