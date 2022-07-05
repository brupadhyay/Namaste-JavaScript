Codes for each lectures addes ->
console.log(a);
var a;

console.log(a);
a = 10;

function name(){
    var x = 10;
}
console.log(window.a);

if( a === undefined){
    console.log("success");
}
else {
    console.log("not undefined")
}


ep - 7 scope chain and lexical environment

function a(){
    var b = 10;
    c();
    function c(){
        console.log(b); //accessible
    }
}
a();
console.log(b);


 ep - 8 lets, const and Temporal Dead zone
console.log(x);
let a = 10;
console.log(a);
var b = 100;
var b = 1000;
console.log(b);

console.log(x);
let a;
console.log(b);
var b= 8;
b =100;

b = 100;

a = 10;
console.log(a);




ep 9 -  block scope and shadowing 
const c = 55;
{
    var a = 100;
    let b = 200;
    const c = 300;
    console.log(a);
    console.log(b);
    console.log(c);

}
console.log(c);

let a = 20;
{
    let a = 27;
}

const c = 20;
    {
        const c = 30;
            {
                const c = 40;
                console.log(c);  //works as lexical environment
            }
            
    }

var b = 100;
{
    let b = 120;
    console.log(b);
}
console.log(b);



 ep 10 - closures in js 


function a(){
    var a = 17;
    function b(){
        console.log(a);
    }
    a = 100;
    return b;
}
var z = a();
console.log(z);

z();

function z(){
    var g = 900;
    function m(){
        var a = 17;
        function b(){
            console.log(a,g);
        }
        b();
    }
    m();
  
}
z();


 ep 11 - setTimeOuts and closures Interview questions

function x(){
    
    for(let i=1; i<6;i++){
        setTimeout(function (){
            console.log(i);
        },i*1000);
    }
    for(var i=1; i<6;i++){
        function close(x){
            setTimeout(function (){
                console.log(x);
            },i*1000);
        }
        close(i);
    }

    console.log("Namaste bhavesh!")
}
x();  


ep 13- First class functions and many more


function statements aka Function Declaration

a();
 b();
function a(){
    console.log("a called");
}

a();
function expressions 
var b = function (){
    console.log("b called");
}

b();

Anonymous function with no name
function (){
}
they are used when they are treated as values

Named Function Expression

var b = function xyz(){
    console.log("named func expression called");
}
b();
xyz();  //important error message

//diff in paramters & arguments

function name( paramters){

}

name(arguments);  


//First Class Functions

var b = function (param1){
    return function xyz(){

    }
}
console.log( b()); 

// first class citizens is ability to be used like values
// passed inside funcn and returned from funcn used to assign into variable


ep-14 Callback Functions in JS ft. Event Listeners 

setTimeout(function (){
    console.log("timer");
},5000);
function x(y){
    console.log("x");
    y();
}
x( function y(){
    console.log("y");
});

//Deep about event listeners

function AttachList() {
    let count = 0;
    document.getElementById("clickMe")
    .addEventListener("click", function xyz(){
        console.log("Button clicked", ++count);
    });
    
}
AttachList();

Ep - 15 Trust Issues with SetTimeout 

console.log("start");

setTimeout(function(){
    console.log("callback");
}, 5000);

console.log("end");

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000) {
    endDate = new Date().getTime();    
}

console.log("while expires here");

console.log("start");

setTimeout(function(){
    console.log("callback");
}, 0);

console.log("end");



EP - 16 Higher oder functions

const radius = [3,1,2,4];
const calculateArea = function (radius) {
    const output = [];
    for(let i = 0; i<radius.length; i++){
        output.push(Math.PI *radius[i]*radius[i]);
    }
    return output;
}
console.log( calculateArea(radius) );

const calculateCircumference = function (radius) {
    const output = [];
    for(let i = 0; i<radius.length; i++){
        output.push(2*Math.PI *radius[i]);
    }
    return output;
}
console.log( calculateCircumference(radius)); 

// to make the things more modular and re-usable

const radius = [3,1,2,4];

const area  = function(radius){
    return Math.PI*radius*radius;
}
const circumFerence = function (radius){
    return 2*Math.PI*radius;
}
const diameter = function(radius){
    return 2*radius;
}

Array.prototype.calculate = function(logic){
    const output = [];
    for(let i=0; i<this.length; i++){
        output.push(logic(this[i]) );
    }
    return output;
}
console.log( radius.map(area));
console.log( radius.calculate(area));

console.log(calculate(radius,area));

console.log(calculate(radius,circumFerence));
console.log(calculate(radius,diameter));*/


// ep - last map[] filter[] reduce[]


//map

const arr = [ 5,1,3,2,6 ];

//Tranformations ->
//Double
//Triple
//Binary

function double(x){
    return x*2;
}
function triple(x){
    return x*3;
}

function binary(x){
    return x.toString(2);
}

const output = arr.map(double);
console.log(output);
const output = arr.map(triple);
console.log(output);
const output = arr.map((x) => x.toString(2) );
    
console.log(output);


/* filter */

const arr = [ 5,1,3,2,6];


function isOdd(x){
    return x&1;
}
function isEven(x) {
    return !(x&1);
}
function great (x) {
    return x>4;
}
// const output = arr.filter(isEven);
const output = arr.filter( (x) => x < 4 );

console.log(output);


/* reduce */

const arr = [5,1,3,2,6];

function findSum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(findSum(arr));

function findMax(arr){
    let  maxi = 0;
    for(let i=0;i<arr.length;i++){
        if( arr[i] > maxi ) maxi=arr[i];
    }
    return maxi;
}
console.log(findMax(arr));

const output = arr.reduce(function (acc, curr){
    acc = acc + curr;
    return acc;
},0);
console.log(output);
const output = arr.reduce(function (acc, curr){
    if( curr > acc) acc = curr;
    return acc;
},0);
console.log(output); 

const users = [
    { firstName: "Jkkkohn", lastName: "saini", age: 26 },
    {firstName: "donald", lastName: "trump" , age: 75},
    {firstName: "Bhavesh", lastName: "upadhyay", age: 50},
    {firstName: "chru", lastName: "yadav", age: 26},
];


const output = users.map( (x) => x.firstName + " "+ x.lastName);

const output = users.reduce(function(acc,curr) {
    if( acc[curr.age]){
        acc[curr.age] = ++ acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});


const output = users.filter( (x) => x.age<30)
.map( (x) => x.firstName);

// using reduce
const output = users.reduce((prev,curr) => {
    if( curr.age < 30 ){
        prev.push( curr.firstName);
    }
    return prev;

},[]);

console.log(output);
