//function

function hello()
{
    console.log("Hello World");
}
hello();
hello();
console.log("function completed");

//return function 
function one()
{
    return "Hello"
}
str = one();
console.log(str);
console.log("return function completed");


//parameter function
function two(user)
{
    return 'hello ${user}'
}
let name = "Priti"
let data = two(name);
console.log(data);
console.log("parameter function completed");

//2 parameter value function
function sum(n1,n2)
{
    return n1+n2
}
let result = sum(5,3)
console.log(result);
console.log("2 parameter value function completed");




