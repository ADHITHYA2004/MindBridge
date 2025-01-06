// task 1
console.log("TASK-1");
let number=prompt("Enter the number")
if(number%2==0){
    console.log("The number is even");
}
else{
    console.log("The number is Odd");
}

//task 2
console.log("TASK-2");
for(let i=1; i<=10;i++){
    console.log(i);
}


//task 3
console.log("TASK-3");
let mul=prompt("enter the number");
for(let i=1;i<=10;i++){
    console.log(mul*i);
}


//task 4
console.log("Task-4");
let num=prompt("Enter the number");
let div=num/2;
let count1=0;
for(let i=2;i<=div;i++){
    if(num/i==0){
        console.log("The Number is not a prime");
        count1++;
        break;
    }
}
if(count1==0){
    console.log("The Number is a prime");
}


// task 5
console.log("TASK-5");
let sum=0;
for(let j=1;j<=100;j++){
    sum=sum + j;
}
console.log(sum);


// task 6
console.log("TASK-6");
let arr=[1,2,3,4,5,6,7];
arr.sort();
console.log(arr[arr.length-1]);


//task 7
console.log("Task-7");
let strings=prompt("enter the string").toLowerCase;
let arr1=['a', 'e', 'i', 'o', 'u'];
let count=0;
for(let char of strings){
    if(arr1.includes(char)){
        count++;
    }
}
console.log(count);

// task 8

console.log("Task-8");
for(let i=1;i<=5;i++){
        console.log("* ".repeat(i));
}


// task 9
console.log("Task-9");
for(let i=1;i<=50;i++){
    if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
        
    }
}


// task 10
console.log("Task-10");
let input='ADHITHYA';
let rev_name='';
console.log("Original string: " + input);

for(let i=input.length-1;i>=0;i--){
    rev_name+=input.charAt(i);
}
console.log("Reverse string: "+ rev_name);