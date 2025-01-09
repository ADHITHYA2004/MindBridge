// Basic Math Operations

console.log("task 1----Arithmetic operator");
let a=parseInt(prompt("Enter the 1st number"));
let b=parseInt(prompt("Enter the 2nd number"));

let add=a+b;
let sub=a-b;
console.log("Sum of the number: "+ add);
console.log("Difference of the number: "+ sub);
console.log("Divide of the number: "+ a/b);
console.log("Reminder of the number: "+ a%b);


// Logical Condition
let enternum=prompt("enter the number");
if(enternum>10 && enternum%2==0){
    console.log("true");
    
}


// Ternary Operator Task
let number=prompt("enter the number for check");
console.log(number<0 ? "Negative" : "Positive")


// Check Odd or Even

let numm=8;
if(numm%2==0){
    console.log("Even");
}
else{
    console.log("odd");
    
}


// grade System
let q = parseFloat(prompt("Enter the mark:"));
switch (true) {
    case (q <= 100 && q >= 90):
        console.log("A");
        break;
    case (q < 90 && q >= 80):
        console.log("B");
        break;
    case (q < 80 && q >= 70):
        console.log("C");
        break;
    default:
        console.log("F");
        break;
}



// Print Multiplication Table
let w=5;
for(let i=0;i<10;i++){
    console.log(w*i);
    
}


// Count Digits in a Number

let g=prompt("enter the number");
let count12=0;
while(g>0){
    g=Math.floor(g/10);
    count12++;
}


// Dialog Box Tasks
// Welcome Alert
alert("welcome to my website")


// User Confirmation
let r=confirm("do you want to continue")
if(r){
    alert("You chose to continue! i");
}
else{
    alert("You canceled!")
}

// Prompt for Age
let v=prompt("enter the age");
if(v>=18){
    prompt("You are eligible");
}


// Simple BMI Calculator
let height=prompt("enter the height");
let weight=prompt("enter the weight");
let BMI = weight / (height ** 2);
alert("Your BMI is: "+ BMI);



// String Methods Tasks
// Reverse a String
let name1= "adhithya";
const myArray1 = name1.split("");
let neww="";
for(let i=myArray1.length-1;i>=0;i--){
    neww+=myArray1[i];
}
console.log(neww);

// Count Vowels

// let strings=prompt("enter the string to count voles").toLowerCase;
let strings="javascript";
let arr1=['a', 'e', 'i', 'o', 'u'];
let count=0;
for(let char of strings){
    if(arr1.includes(char)){
        count++;
    }
}
console.log(count);


// Check Palindrome
let name0= "madam";
const myArray0 = name1.split("");
let neww1="";
for(let i=myArray0.length-1;i>=0;i--){
    neww1+=myArray0[i];
}
if(name0==neww1){
    console.log("true");
}
else{
    console.log("false");
    
}


// Extract Initials
let input9="adhithya sivakumar"
let ar3=input9.split(" ");
for(let i=0;i<ar3.length;i++){
    console.log(ar3[i].toUpperCase().charAt(0));
}


// Replace Words
let j="i love programming"
console.log(j.replace("programming","javascript"));

// Split Sentence into Words
let input1= "Hello world";
const newArr = input1.split(" ");
console.log(newArr);

// Remove Spaces
let input2="i love javascript";
let newArr2=input2.split(" ");
let sentence="";
for(let i=0;i<newArr2.length;i++){
    sentence+=newArr2[i];
}
console.log(sentence);


// Find Character Frequency

let input3="hello";
let arrr=input3.split("");
let char1='l';
let count5=0;
for(let i=0;i<arrr.length;i++){
    if(arrr[i]==char1){
        count5++;
    }
}
console.log(count5);





// 

let name="adhithya";
let sum=0;
for(let i=0;i<name.length;i++){
    sum+=name.charCodeAt(i);
}