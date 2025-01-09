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

let str2=prompt("enter the string for task 2").split(" ");
let str22="CHANGED"
let duplicate=new set();
function fun2(str2){
    let change="";
    let duplicate=new set();
    for(let i=0;i<str2.length;i++){
        if(change.indexOf(str2(i)) ==-1){
            change+=str2[i];

        }
        else{
            change+=str22;
        }
    }
    return change;
}
console.log(fun2(str2));



// task3
let str3=prompt("enter the string").split(" ");

function fun3(str3){
    let newString="";
    for(let i=0;i<str3.length;i++){
        if(i%2==0){
            newString+="EVEN";
        }
        else{
            newString+= " " +str3[i] +" ";
        }
    }
    return newString;
}
console.log(fun3(str3));


// task 4
let str4=prompt("enter the string");

function fun4(str4){
    let g="";
    for(let i=0;i<str4.length;i++){
        if(g.indexOf(str4[i]) === -1)
            g+= str4[i];
        
    }
    return g;
}
console.log(fun4(str4));