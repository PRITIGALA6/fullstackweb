//local and global variable
function user(u)
{
    return 'Hello, ${u}!';
}
let name = "Priti"
let str = user(name);
console.log(str);

// Arrow function
let greet = (value) =>
{
    console.log("heloo " + value);
}
greet("hitesh");


let add = (a,b,c) => a+b+c;
let result = add(4,9,1);
console.log(result);

// function inside greet method
let student = {'names':'prit','rollno':45,'func':function (){
    console.log("hi hello");
    console.log(this.names);}  ,
    'great':function (){
        console.log("Yor are great");
        if(student.names > student.rollno)
        {
            console.log(names);
        }
        else{
            console.log(this.rollno);
        }
        
    }


   
}
student.func();
student.great();

//hw
function data(one,two)
{
    
    if(one>two)
    {
        return one
    }
    else
    {
        return two
    }
}
let value = data(8,4);
console.log("Bigger value is", value);
