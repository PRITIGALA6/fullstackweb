//array method
let nums = [45,67,89,32,46,82]
nums.forEach((n,i,nums)=>
{
    console.log(n,i,nums);
});

let numbs = [56,78,90,44,48]
numbs.forEach((j)=>{
    console.log(j);
});

//console.log(numbs.filter(k=k%2===0));
//numbs.forEach(k => {
 //   console.log(k);
 //});


//map method
numbs.filter(j=>j%2===0)
.map(j=>j*2)
.forEach(j=>{
    console.log(j);
});


//reduce method
//let digit = [42,51,24,98,65,12]
//digit.filter(n=n%2===0)
//.map(n=>n*2)
//.reduce((a,b)=>a+b)

//set
let set1 = new Set("book keeper");
console.log(set1);

// set 2
let set2 = new Set();
set2.add(4);
set2.add(5);
set2.add(9);
set2.add("Hi");
console.log(set2);
console.log(set2.has(4));

set2.forEach(value=>{
    console.log(value);
});


//map method
let map = new Map();
map.set("Priti","js");
map.set("ronak","py");
map.set("kiran","ML");
map.set("ronak","ds");

console.log(map.keys());
console.log(map);
console.log(map.has('kiran'));
console.log(map.get('roak'));


// for
for (let [k,v] of map)
{
    console.log(k, ":" ,v);
}
console.log("Helo word");

//map for
map.forEach((v,k) => {
    console.log(k, ":" ,v);
});