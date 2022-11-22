console.log("hello world");// console.log displays to browser


//in line comment
/*this is 
a multi-line
comment*/

let number = 9;// using let to assign a value to a variable
console.log(number);//displaying the value


/* Data types:
undefined, null , boolean , string , symbol,
number and object.*/

const myName = "Jamaar"; //using const to assign a string to a constant variable.
console.log(myName);

var a;//declaring a variable
var b= 2; //assigning a variable giving a variabe a value

console.log(a);//displaying an undefined variable

a=7;//assigning the variable a value
console.log(a);// displaying the new value


//initialize variables 
let d = 5;
let e = 50;
let c = "I am a ";

//-------------------------

d=d+1;
e=e+5;
c=c+"String!";//*** */

console.log(d,e,c);

//remember case sensitivity camelCase

//adding two numbers
var sum =10 + 10;
console.log(sum);

//subtraction
var difference = 45 - 15;
console.log(difference);

//multiplication 
var product = 15*3;
console.log(product);

//division
var quotient = 33 / 3;
console.log(quotient);

//incrementing numbers
var myVar = 87;
//---------------------
myVar++;
console.log(myVar);

//decrementing numbers
myVar--;
console.log(myVar);

//decimal numbers
var ourDecimal = 5.7;
console.log(ourDecimal);

//multipling decimals
var product2 = 2.0 * 5.7;
console.log(product2);

//dividing decimals
var quotient2 = 4.4/2.2;
console.log(quotient2);

//remainders
var remainder;
remainder = 11 % 3;
console.log(remainder);
// often used to determine if a number is even or odd 
//if the number doesn't have a remainder or is 
//divisibe by 2 it is even

//compound assignment with augmented operator
var f = 3;
var g = 17;
var h = 12;
var j = 23
//--------------------------

f += 12;
g -= 2;
h *= 5;
j /= 2;
console.log(f,g,h,j);

//declaring string variables
var firstName = "Jamaar"
var lastName =  "Green"
console.log(firstName + " "+ lastName);

//escaping literal quotes in strings
var myStr = "I am a \"Double quoted\" string inside \"double quotes\"";
console.log(myStr);

//quoting strings with single quotes
/*
var myStr = '<a href= "http://www.example.com\" target=\"_blank\">Link</a>'

*/

//escape sequences in strings

/*
code output
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/

var myStr1 = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr1);

//concatenating strings with plus operator
//example
var ourStr = "I come first. " + "I come second";
//---------------------
var myStr2 = 'This is the start. '+ 'This is the end';
console.log(ourStr);
console.log(myStr2);

//concatenating strings with plus equals operator
//example
var ourStr1 = "I come first. ";
ourStr1 += "I come second";
console.log(ourStr1);

var myStr3 = 'This is the first sentence. ';
myStr3 += 'This is the second sentence.';
console.log(myStr3);

//constructing strings with variables
//example
var ourName = "freeCodeCamp";
var ourStr2 = "Hello, Our name is " + ourName + ", how are you";
var ourStr3 = "Hello ,"  + ourName + " I'm great! " + ". Nice to meet you! I'm " + firstName ;
console.log(ourStr2);
console.log(ourStr3);

//appending variables to strings
//example
var anAdjective = "awesome!";
var ourStr4 = "freeCodeCamp is ";
console.log(ourStr4 + anAdjective);

var ourStr5 = "Learning to code is ";
console.log(ourStr5+=anAdjective);

//find the length of a string
//Example
var firstNameLength = 0;
var firstName = "Hattie";

firstNameLength = firstName.length;//.length will return a number for the number of characters in a string

//setup
var  lastNameLength = 0;
var lastName = "Green"

//------------------------
lastNameLength = lastName.length;
console.log(firstName +" "+ firstNameLength , lastName +" " + lastNameLength);

//bracket Notation to find first character in string
//example
var firstLetterOfFirstName = "";

firstLetterOfFirstName = firstName[0];//remember 0 based indexing this is calling the first item in the array
console.log(firstLetterOfFirstName);

var thirdLetterOfLastName = "";
thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);

//string Immutability
//example
//setup
var myStr4 = "Jello World";//strings are immutable meaning they cannot be altered once
                           // created this does not mean they cannot be changed just that
                           // the individual characters of a string literal cannot be changed
                           //the whole string must be re-written

//---------------------------
//myStr4[0] = "H"; //will not work
myStr4 = "Hello World";
console.log(myStr4);

//bracket notation to find Nth character in string
//example

var fourthLetterOfFirstName = firstName[3];
console.log(fourthLetterOfFirstName);
 
//bracket notation to find last character in a string
//example

var lastLetterOfFirstName = firstName[firstName.length - 1];//.length -1 will bring up the last item in a string
var lastLetterOfLastName = lastName[lastName.length - 1];

console.log(lastLetterOfFirstName + " "+ lastLetterOfLastName)

//bracket notation to find the Nth-to-last character in string
//example
var thirdToLastLetterOfLastName = lastName[lastName.length - 3]

console.log(thirdToLastLetterOfLastName);

//word blanks
//example
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){//fuction needs perameters passed in will return the results to the empty string 
    var result = "";
result += "The " + myAdjective +" "+ myNoun + " scared her. And she " + myVerb + " " + myAdverb;
    return result;
}

console.log(wordBlanks("dog","big","ran", "quickly"))//calls function and passes in the arguments

//store multiple values with **ARRAYS**[]
/*arrays allow you to store multiple pieces of data in one place the can contain all strings and numbers
each element of an array is seperated by a comma
or any combination*/
//example
var ourArray = ["Brent", 11, "Jamaar Jr.", 10 , "Kayden", 8];

console.log(ourArray);

//nested arrays
//example
var ourArray2 = [["Chicago Bulls", 23], ["Minnesota Vikings", 84]];/*when one of the elements in an 
array is in an array its nested or multidimentional*/

console.log(ourArray2);

//access array data with indexes
//example
var ourArray3 = [50,60,70];
var ourData = ourArray3[0];//equals 50

//setup
var myArray = [50,60,70];
var myData = myArray[1];
console.log(ourData, myData);//equals 60
 

//modify array data with indexes
/* you can use array indexes to modify arrays
*/
//example
var ourArray4 = [10,64,99];
ourArray4[1] = 45;// our array now equals [18 , 45, 99].
console.log(ourArray4);

var myArray2 = [1, 23, 33]
myArray2[0] = "Greatest Bulls ";//call array name[0] and 0 based index number then assign new value
console.log(myArray2);


//access multi-dimensional arrays with indexes
//example
//setup
var myArray3 = [[1,2,3], [4,5,6],[7,8,9],[[10,11,12],13 ,14]];/*to do this we must first use 0 indexing to pick the correct array 
                                                               then we use 0 indexing to select the value inside the array.
                                                               */
var myData2 = myArray3[3][0][0];//should equal 10
console.log(myData2);

//manipulate arrays with push()
/*you can append data to the end of an array with the .push([]); function this will add an additional array*/
//example
var ourArray5 = ['Jordan ',' Moss',' Iverson']
ourArray5.push(['Sanders', 'Griffey Jr.']);
console.log(ourArray5);
 
//manipulate arrays with pop();
/*we can remove an item from the end of an array with the .pop(); function */
//example
var ourArray6 = [1,2,3];
var removedFromOurArray = ourArray6.pop();
console.log(ourArray6);
console.log(removedFromOurArray);
//removedFromOurArray now equals 3, and our Array now equals [1,2]
//in this instance .pop(); will remove the second array
var myArray4 = [[9,8,7],[6,5,4]];
var removedFromMyArray4 = myArray4.pop();
console.log(myArray4);
console.log(removedFromMyArray4);

//manipulate arrays with .shift();
/*.shift(); is similar to .pop(); except it removes the first element in an array*/
//example
//should remove Jordan
var removedFromOurArray5 = ourArray5.shift();
console.log(ourArray5);
console.log(removedFromOurArray5);

//manipulating arrays with .unshift();
/*the .unshift(); function is simialr to the .push(); function while push adds an element to 
the end of an array .unshift(); adds an element to the front of an array */
//example
var ourArray7 = ["Stimpson", 'J', "Cat"];
ourArray7.shift();//our array now equal ["J","Cat"]
ourArray7.unshift("Happy"); //Our array now equals Happy J Cat

var myArray5 = ["bigger","biggest","most colosal"];
myArray5.shift();//bigger has been removed
myArray5.unshift("huge")// huge has been added to the front
console.log(myArray5);

//shopping list
/*we will be nesting arrays */
//example
var myList = [["cereal" , 3],["milk", 2],["bananas",3],["juice", 8] , ["eggs", 12]];
console.log(myList);

//write reusable code with **FUNCTIONS**
/*functions allow us to create re-usable code in javaScript */
//example
function ourReusableFunction(){
    console.log("Hello, Everyone");
}
ourReusableFunction();
ourReusableFunction();
// first call out function  then assign it a name parenthesis to pass in perameters and curly braces for the
//code to be executed. the function must be called after the close of the curly brace in order to execute
// we can call our function at any time to execute it

//passing value to functions with arguments
/*perameters are variables that act as place holders in a function until it is called 
when you call a function with perameters you must pass in the data for the perameters in the arguments*/

//example
function ourFunctionWithArgs(a,b){
    console.log(a-b);
}
ourFunctionWithArgs(10,5);

/*Global scope and functions
scope refers to the visibility of variables
variables declared outside of a function block have global scope
meaning they can be seen and accessed any where in our java script code.
if a variable is declared inside a function it is not accessable outside the function
*/

//local scope and functions
/*
variables that are declared inside a function or inside the function perameters have 
local scope this means they are only visibe inside the function
*/
/*Global vs local scope 
it is possible to have a global and a local variable with the same name
when this happens the local variable takes precedence*/

//example
var outerWear = "T-Shirt";

function myOutfit(){
var outerWear = "Jacket";
    return outerWear;
}
console.log(myOutfit());//will return jacket because we are calling our function and its variable
                        //this is how you console.log a function
console.log(outerWear);// this will return the global variable t-shirt //console.log a variable

//return a value from a function with return
/*using a return statement you can return a value from a function */
//example

function minusSeven(num){
    return num -7;
}

console.log(minusSeven(10));//our perameter is set to number. our function is to subtract 7 from our number
                            //log out our function passing in the number 10 as an argument. this will return 3.
function timesFive(num){
    return num * 5;
}            
console.log(timesFive(5)); //should return 25

//understanding undefined value returned from a function
/*functions can have return statements but they dont have to in this case the function adds 3 to the sum1
variable which is a global variable because it is assigned before the function it does not return anything however
if you dont specify a return the value is undefined if we log this out it should say undefined*/
//example
var sum1 = 0;
function addThree(){
    sum1 = sum1 +3;
}
console.log(addThree());

//assignment with a returned value
/*assigning a returned value to a variable here we have the function
change we are passing in a number as an argument and returning the total
of the math equation. we are passing in a 10 and assigning the returned value from the change function
to the global variable changed using the assignment operator */ 
//example

var changed = 0;

function change(num){
    return (num+5)/3;
}

changed = change(10);

var processed = 0;
function processArg(num){
    return (num + 3) / 5;
}

processed = processArg(7);

console.log(changed);
console.log(processed);

//stand in line
/*in computer science a que is an abstract data structure where items are kept in order
new items can be added to the back of the que and old items are taken off the front of the 
que in our example we will will simulate some of the functionality of the que
using the our next in line function we will add an item to the array that is passed in 
and return the first item on the list

to add an item to the list use .push
we took the array(arr) that was passed in testArr
and we pushed the item that we passed in 6
now we want to return the first item on the list
*/
//example

function nextInLine(arr, item){
    arr.push(item)//this adds an item to the end of ann array passi

    return arr.shift();//.shift removes the first item of an array
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));// JSON.stringify is a way to print an array out as a string that can be read easier
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));

//Booleen values
//are only true and false you do not need quotes to declare true or false

function welcomeToBooleens(){
    return true;
}
console.log(welcomeToBooleens());

//use conditional logic with if statements
/*an if statement is used to make decisions in code the key word if tells javaScript to execute the 
code in the curly braces under certain conditions defined in the parenthesis*/
//example
function ourTrueOrFalse(isItTrue){
    if (isItTrue){
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue){
    if(wasThatTrue){
        return "Yes, that was true";
    }
    return "No, that was false.";
}

console.log(trueOrFalse(true));

//comparison with equality operators
/*there are many comparison operators in javaScript that will return a booleen value of true or false 
the most common is the equality operator and it is often with an if statement*/
//example
function testEqual(val){
if (val == 12){
    return "Equal";
}
return "Not Equal";
}
console.log(testEqual(10));//expect this to return not equal

//comparison with strict equality
/*=== values must be the same type string number etc... */
//example
function testEquality(val){
    if (val === 10){
        return "Both Values are Equal";
    }
    return "They are not equal values";
}
console.log(testEquality("10"))//it wlll return they are not equal because one value is a string 

//comparison with inequality operator
/*!= */
function notEqual(val){
    if (val != 99){
        return "The value does not equal 99";
    }
    return "Both Values equal 99";
}
console.log(notEqual(100));

//comparison with strict in equality
/*!== this will compare if values are not equal regardless of type*/
//example
function testStrictNotEqual(val){
    if(val !== 17){
        return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual(10));

//comparison with the logical greater than operator
/* > */
//example
function testGreaterThan(val){
    if (val > 100 ){
        return "Over 100";
    }
    if (val > 10){
        return "Over 10";
    }
    return "10 or Under"
}
console.log(testGreaterThan(10));

//comparison with logical less than operator
/* < */
function testLessThan(val){
    if (val < 99 ){
        return "value is less 100";
    }
    if (val < 149){
        return "value is less than 150"
    }
   return "number is greater than 150"
}
console.log(testLessThan(175));

// we can also use <=,>=

//test with the logical and operator
/* if you want to test if two things are true use a logical and operator*/
//example
function testLogicalAnd(val){
    if(val <= 50 && val >= 25){      
            return "Yes";
        }
      return "No";  
    }
    
console.log(testLogicalAnd(10));

//test with logical or operator
/*if we want to test if one or more value is equal we can use an or operator */
//example
function testLogicalOr(val){
    if (val < 10 || val > 20){
        return "Outside";
    }
    return "Inside";
}
console.log(testLogicalOr(15));

//else statements
/*when an if statement is true normally the code after the statement will be evaluated
and if its not true nothing happens but with an else statement an alternate block of code can be run */
//example 
function testElse(val){
    if(val > 5){
        return "Bigger than 5";
    } else {        
   return "5 or smaller";        
    }
 } 

console.log(testElse(4));

//else if statement
/* if you have multiple conditions that need to be addressed you would use an else if statement as a way of chaining if statements*/
//example
function testElseIf(val){
    if (val > 10){
        return "greater than 10";
    }else if (val < 5){
        return "smaller than 5";
    }else{
        return "between 5 and 10";
    }
}
console.log(testElseIf(7));

//logical order in if else statements
/* when using else if statements the order you put them in is very important when compairing values make sure 
you put the lowest number first because if the statement is true the code will execute and it will not continue 
to see if the next line of code is also true */

//chaining else if statements
/*you can also chain else and if else statements */
//example
function testElseIfChain(val){
    if (val < 5){
        return "tiny";
    }else if (val < 10){
        return "small";
    }else if (val <15){
        return "medium";
        }else if (val < 20){
            return "large";
        }else{
            return "huge";
        }
    }
console.log(testElseIfChain(20));

//golf code
/*in the game of golf each hole has a par which means the avg number of strokes to get the ball in the hole
each stroke has a name lets write a function where you pass in the par and you also pass in the strokes and return
the nickname*/
//example
var names = ["Hole in one!", "Eagle", "Birdie","Par","Bogey","Double Bogey","Go Home!"]
function golfScore(par, strokes){
    if(strokes === 1){
        return names[0];
    }else if (strokes <= par-2){
        return names[1];
    }else if (strokes === par -1 ){
        return names[2];
    }else if (strokes === par){
        return names[3];
    }else if (strokes === par + 1){
        return names [4];
    }else if (strokes === par + 2){
        return names [5];
    }else{
        return names [6];
    }
}
console.log(golfScore(4,8))

//switch statements