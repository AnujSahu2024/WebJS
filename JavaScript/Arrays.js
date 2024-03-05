let num=[10,8,4,5,1,20];
let i=1;
//num.sort();
console.log(num.length);
let compare=(a,b)=>{
    console.log("a ",a," || b ",b,"|| a-b ",a-b," || i ",i);
    i++
    return a-b;
}
num.sort(compare);
console.log(num);
let compare2=(a,b)=>{
    return b-a;
}
//num.sort(compare2);
//console.log(num);
/*
let num=[1,2,3,4,5,6,7,8,9,10];
console.log(num,num.length, typeof num);
delete num[4];
console.log(num , num.length,typeof num);
let num2=[10,20,40,30,50];
let num3=num2.concat(num);
console.log(num3);
console.log(num2);
console.log(num);
*/
/*let num=[1,2,3,4,5,6];
console.log(typeof num+ num);
let b=num.toString();
console.log(b + typeof b +b.length);
let c=num.join("|")
console.log(c+ typeof c);
console.log(num+ typeof num);
*/
/*let marks=[10,20,50,40,60,45];
console.log(marks, marks.length);
for(let a =0;a<marks.length;a++)
{
    console.log(marks[a]);
}
marks[2]=100;
marks[7]=200;
for(let a =0;a<marks.length;a++)
{
    console.log(marks[a]);
}
console.log(typeof marks);
*/
