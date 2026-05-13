console.log("let a = '5'\n let b =5 ; " );
console.log("a==b:", a==b); //
console.log("a===b:",a===b);
// == use to compare values with not respect to data type
// === use to comapre the vlaues with respect to the data type


//ternary operator vimp(react perspective)
let num = 90;

let grade = (num >= 90) ? "A" : (num >= 80) ? "B" : "C";
console.log("Grade:", grade);

let age = 24;
if(age>18){

    if(age>110){
        console.log("Invalid age");
    }
    else{
         console.log("eligible");
    }
   
}
else if(age<=0){
    console.log("please enter correct age");
}
else{
    console.log("Not eligible");
}

//document object model
