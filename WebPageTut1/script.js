console.log("Hello");
console.error("Hey this is an error");
console.warn("This is Warning");
obj={a:1,b:2,c:3,d:4};
console.table(obj);
console.time("for loop");
for(let i=0;i<5;i++)
{
    console.log("Hi "+i);
}
console.timeEnd("for loop");
console.time("while loop");
let i=0;
while(i<5)
{
    console.log("Hi "+i);
    i++;
}
console.timeEnd("while loop");