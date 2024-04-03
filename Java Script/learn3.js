// If else statement
let num = 2
if (num < 0)
{
    console.log(num,"The number is negative");
}
else
{
    console.log(num,"The number is positive");
}
console.log("Bye");

//if elseif else
let n1 = 54
let n2 = 17
let n3 = 9
if (n1 > n2 && n1>n3)
{
    console.log("Number 1 is greater");
}
else if (n2 > n3 && n2>1)
{
    console.log("Number 2 is greater");
}
else
{
    console.log("Number 3 is greater");
}


//Even and odd
let number = 68
let result 
if (number % 2 === 0)
{
    result = "Even"
}
else
{
    result = "odd"
}
console.log(result)


//switch case
let day = "5"
switch(day)
{
    case 'Monday':
        console.log("7AM");
        break;
    case 'Tuesday':
        console.log("8AM");
        break;
    case 'Wednesday':
        console.log("8AM");
        break;
    case 'Thursday':
        console.log("7AM");
        break;
    case 'Friday':
        console.log("7AM");
        break;   
    default: 
        console.log("Only monday to friday working");
}
console.log("Bye");


// template literal
let a2 = 5
let b1 = 40
let results = a2 + b1
console.log('The addition of $(a2) and $(b2) is $(results)');

