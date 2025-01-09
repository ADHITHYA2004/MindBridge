let str1=prompt("enter the string").split(" ");

function fun1(str1){
    let count=0;
    let large="";
    for(let i=0;i<str1.length;i++){
        if(str1[i].length>count){
            count=str1[i].length;
            large=str1[i];
        }
    }
    return large;
}
console.log("the largest string " + fun1(str1));


// task2

let str2=prompt("enter the string for task 2");

function fun2(str2){
    let 
}