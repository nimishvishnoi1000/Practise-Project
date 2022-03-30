console.log('hello'); //demo for javascript
console.log('hello from code');
console.log(100+121);
console.log(4>1);
var Hstr="hello ";
var abc="Sting in small letters";
var ABC="Sting in CAP letters";
console.log(abc+ ABC);
typeof(Hstr);
var nos=12;
var nos1=123;
var nos2=124;
var nos3=126;
var X=10;
var Y=20;
var Z=30;

var Prompto = "Hi ! Enter your name";

var intake = prompt(Prompto);
document.write("Welcome " + intake);

var persion ={};
var people ={name1:"John",name2:"watson",name3:"Steve",name4:"David"}
console.log(people['name3'])

var Organisation= {person1:{fname:"Nimish", lname:"vishnoi",desgn:"SE"},
                   person2:{fname:"Davv", lname:"vishnoi",desgn:"SSE"},
                   person3:{fname:"Ron", lname:"avd",desgn:"DA"},
                   person4:{fname:"Carl", lname:"poas",desgn:"BA"},
                   person5:{fname:"Mathew", lname:"vdsi",desgn:"SE"},
                   person6:{fname:"Davv", lname:"vishnoi",desgn:"SSE"}};


var OurFriends =["vs", "admin", "you", "louis", "david", "Carl", "Mathew", "Chris"];

OurFriends[OurFriends.length] = "new item";

OurFriends.push("new item push");
console.log(OurFriends);
OurFriends.pop();

var sttr = OurFriends.toString();

spllt = sttr.split(',');

var  nee = OurFriends.shift();

var  nee = OurFriends.unshift("vs new");


OurFriends.sort();
OurFriends.reverse();

var ourmanyfriends = [["i", "love", "JS"],["work","at", "yash"]];
console.log(ourmanyfriends[0][2]);

var a = 14;
var b = a-10;
var message;


switch (b) {
    case 8:
        message = 'value of b is 8';
    case 9:
        message = 'value of b is 9';
    case 10:
        message = 'value of b is 10';
    case 11:
        message = 'value of b is 11';
        break;      
    default:
        message = 'value matches to no value';             

}

console.log(message);

var a=0;
var b=0;
while(a<=7)
{
    console.log(OurFriends[a]);
    a++;
}


const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);
x = myObj.name;

