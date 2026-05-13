conole.log("hello day 8 js");

fruits=['mango','banana','grapes','orange'];
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//for in loop
console.log("for in loop");
for(let index in fruits){
    console.log(fruits[index]);
}

//map
console.log("using map");

let results = fruits.map((e)=>{
    return e.toUpperCase();
});
console.log(results);

//create a 10 employees object of id ,name ,role & salary
//iterate it by using map
//print onlyemployees whose role is developers

let emp1 ={id:4,name:"Komal:",role:"developer" ,salary:50000};
let emp2 ={id:5, name:"Rohit" , role:"tester",salary:40000};

const checkEmail=()={
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

}