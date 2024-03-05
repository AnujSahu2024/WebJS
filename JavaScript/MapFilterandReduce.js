//Reduce
let arr=[1,2,3,4,5];
const add=(a,b)=>{
    return a+b;
};
let sum= arr.reduce(add);
console.log(sum);

//Filter
/*let arr=[45,23,21];
let a2=arr.filter((a)=>{
        return a<30;
});
console.log(a2);
*/
/* MAP
let newArr= arr.map((ele)=>{
    console.log(ele);
    return ele+2;
});
console.log(newArr);
let newArr2= arr.map((ele,ind,art)=>{
    console.log(ele," => "+ind+" || "+art);
    return ele+2;
});
console.log(newArr2);
*/
