//stack

function show()
{
    console.log("hi");

}
show();

let num = 1
function hello()
{
    console.log("hi",num);
    num = num + 1
    if(num <= 5)
    {
        hello();
    }
    
}
hello();

//recursion factorial 
function factorial(n)
{
    if(n==0)
    {
        return 1
    }
    else
    {
        return n * factorial(n-1);
    }
}
let number = 4
let result = factorial(number);
console.log("The factorial of",number,"is",result);