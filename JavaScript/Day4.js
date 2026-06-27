function greet(){
    console.log("Hello javascript");
}

greet();

function sum(a,b){
    return a + b;
}

let result = sum(5,10);
console.log(result);

//variable function

let addition = function(a,b){
    console.log(("sum =" + (a +b)));
}

addition(20,30);

let myMsg = function(){
    return "How are you doing";
}

console.log(myMsg());

let m2 = function(){

}

m2 = function(){
    console.log("change logic");
}

const showReply=()=>{
    console.log("This is  a reply");
}

showReply();

const multiply=(a,b)=>a*b;
console.log(multiply(5,10));

const division = (a,b)=>{
    console.log("Division = " + (a/b));
}

let a = "5";
let b =5;

// == use to compare the values with not respect to data type
// === use to compare the values with respect to data type

console.log(a==b);

// ternary operator : VVIMP(React perspective)

let num =89;
let grade = num >= 90 ? "Grade A" : "FAIL";

console.log(grade);

let age = -2400;

if(age>18){
    if(age>100){
        console.log("Invalid Age")
    }
    else{
        console.log("Eleigible for voting")
    }

}
else if(age<0){
    console.log("Please enter a correct age")
}

else{
    console.log("Not eligible for voting")
}

//Dom-Document Object Model
//content chaging the without loading the page
document.getElementById("#h1").innerHTML="Welcome to JavaScript";







