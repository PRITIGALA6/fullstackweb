//object literal
let alien = {}
console.log(typeof alien);

alien = {'name': 'priti', 'no':12}
console.log(alien);


//object under object
alien = {'name': 'priti', 'no':12,subject:{'maths':20,'english':"18",'gujrati':17}}
console.log(alien);
console.log(alien.subject.english.length);
console.log(alien.subject.english?.length);
delete alien.subject
console.log(alien);

alien = {'name': 'priti', 'no':12,subject:{'maths':20,'english':"18",'gujrati':17}}
for(let key in alien)
{
    console.log(key);
    console.log(key, alien[key]);
}

console.log(alien.subject);
