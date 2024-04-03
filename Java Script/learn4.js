//while loop
let i = 1
while(i<=10)
{
    console.log(i);
    i++;
}
console.log("Loop completed");

//do while loop
let j = 1
do
{
    console.log("hi",j);
    j++
}while(j<=5)
console.log("do while loop completed");

//for loop
for(let k=11;k<=15;k++)
{
    console.log(k);
}
console.log("for loop completed");


//nested for loop
for(let a = 1; a<=3; a++)
{
    for(let b=1; b<=a;b++)
    {
        console.log("*");
    }
    console.log("");
}


//for loop with if
for(let c=1; c <= 100; c++) 
{
    if(c%3 ===0)
    {
        console.log(c);
    }
}
console.log("for loop if completed");


let num=123456
console.log(num%10);
num = parseInt(num/10);
console.log(num);

console.log(num%10);
num = parseInt(num/10);
console.log(num);

let number = 56789
while(number > 0)
{
    console.log(number%10);
    number = parseInt(number/10);
    console.log(number);

}