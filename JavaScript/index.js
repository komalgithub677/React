// console.log("hello day 4 js")

// public void m1(){

// }

function greet (){
        console.log("hello.. good morining all..")
}

//no need to create object here 
//directly call the function 
greet();

function sum(a ,b){
    return a + b;

}

let result = sum(3,5);
console.log(result);

//third way writing function
function diff(a,b) {
    return a - b;
}

//arrow function VVIMP(React perspective)
//variabl function

let addition = function(a,b){
    console.log(a+b);
}
addition(3,5);

const multiply = (a, b) => a * b;

let myMsg =function (){
    return "How are you all..";
}
console.log(myMsg());

const showReply=()=>{
    console.log("I am fine..");
}
showReply();

const multiply1 =(a,b) => a * b;
console.log(multiply1(3,5));

const division = (a,b) => console.log("div = " + (a/b));
division(10,5);;;;;;;;;;;

//hof-highly order function
//iiff-immediately invoked function expression
//direclty executable function no need to call the function
(function(){
        console.log("iiff funtion ... ")
}
)();







