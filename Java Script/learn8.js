//Constructure use of this keyword
function Alien(name,tech)
{
    this.name = name;
    this.tech = tech;
    this.work = function()
    {
        console.log("Hello i am function");
    }
    
}
let alien1 = new Alien("priti","js");
let alien2 = new Alien("jiten","py");

alien1.tech = "c++";
console.log(alien1);
console.log(alien2);
alien1.work();


//Arrays
let values = new Array();
let val = [];
console.log(val);
console.log(values);

//push method
values.push(7);
console.log(values);
values.push(4);

values.push(10);
values.push(1);
console.log(values);
console.log(values[2]);
 
values[4]= 67;
console.log(values);

//new array
let array = ['priti','heet','trupesh']
array[3]= "jiten"
console.log(array);

//mix array
let data = ['priti',5,{'std':10},function(){
    console.log("Hello World");
}]
console.log(data);
data[3]();

// number array push method
let num_arr = [4,67,89,23,1]
console.log(num_arr.push(345));
console.log(num_arr);

//pop method
let date = [5,4,20,87]
console.log(date);
date.pop();
console.log(date.pop());
console.log(date);

//shift method
let one = [1,2,3,4,5,6]
console.log(one.shift());
console.log(one);

//unshift method
let two = [2,4,6,8,10]
console.log(two.unshift(98));
console.log(two);

//splice method
let three = [45,67,3,23,6,8]
//console.log(three.splice(3));
//console.log(three.splice(1,2));
console.log(three.splice(2,2,11,15));
console.log(three);


//for of loop 1
let num = [];
num[0] = 5
num[9] = 10
console.log(num);
console.log(num.length);

//for of loop 2
let nums = [];
nums[0] = 5;
nums[15] = 15;

for(let i of nums)
{
    console.log(i);
}

// for in 
for(let j in nums)
{
    console.log(j);
    console.log(nums[j]);
}

//assign
let number = [5,6,7,8]
let [a,b,c,d] = number;
console.log(d);

//split method
let words = "my name is priti gala".split(" ");
let [ e,f,g,h,i] = words;
console.log(h);

//three dots
let str = "my name is not null".split(" ");
let [j,k,...v] = str
console.log(str);
console.log(v);
console.log(j)

