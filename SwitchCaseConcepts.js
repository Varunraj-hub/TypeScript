var myday = "ghghg";
switch (myday) {
    case "Sunday":
        console.log("Its Sunday");
        break;
    case "Monday":
        console.log("Its Monday");
        break;
    case "Tuesday":
        console.log("Its Tuesday");
        break;
    case "Wednesday":
        console.log("its Wednesday");
        break;
    case "Thursday":
        console.log("Its Thursday");
        break;
    case "Friday":
        console.log("Its Friday");
        break;
    case "Saturday":
        console.log("Its Saturday");
        break;
    default:
        console.log("Its wrong day input");
        break;
}
//enum concepts in switch case
var Browsers;
(function (Browsers) {
    Browsers["Chrome"] = "chrome";
    Browsers["Firefox"] = "firefox";
    Browsers["Edge"] = "edge";
    Browsers["Safari"] = "safari";
})(Browsers || (Browsers = {}));
var browsername = Browsers.Chrome;
switch (browsername) {
    case Browsers.Chrome:
        console.log("Launch Chrome");
        break;
    case Browsers.Edge:
        console.log("Launch Edge");
        break;
    case Browsers.Firefox:
        console.log("Launch Firefox");
        break;
    case Browsers.Safari:
        console.log("Launch Safari");
        break;
    default:
        console.log("Provide Valid browser");
        break;
}
