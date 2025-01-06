// task 1
console.log("TASK-1 ---ODD or EVEN");
let number=prompt("Enter the number for find ODD or EVEN")
if(number%2==0){
    console.log("The number is even");
}
else{
    console.log("The number is Odd");
}

//task 2
console.log("TASK-2 ----Pint 1 to 10");
for(let i=1; i<=10;i++){
    console.log(i);
}


//task 3
console.log("TASK-3 ----Multiple of number");
let mul=prompt("enter the number for find the multiples");
for(let i=1;i<=10;i++){
    console.log(mul*i);
}


//task 4
console.log("Task-4 -----find prime num");
let num=prompt("Enter the number to find Prime");
let count2=0;
if(num<=1){
    console.log(num + " is not a prime number")
}
else{
    for(let i=2;i<=num;i++){
        if(num%i==0){
            count2++;
        }
    }
    if(count2==1 ){
        console.log(num + " is  a prime number");
    }
    else{
        console.log(num + " is not a prime number");
        
    }
}

// task 5
console.log("TASK-5 ----sum of 100");
let sum=0;
for(let j=1;j<=100;j++){
    sum=sum + j;
}
console.log(sum);


// task 6
console.log("TASK-6 ----largest number");
let arr=[1,2,3,4,5,6,7];
arr.sort();
console.log(arr[arr.length-1]);


//task 7
console.log("Task-7 ------to count voles");
let strings=prompt("enter the string to count voles").toLowerCase;
let arr1=['a', 'e', 'i', 'o', 'u'];
let count=0;
for(let char of strings){
    if(arr1.includes(char)){
        count++;
    }
}
console.log(count);

// task 8

console.log("Task-8 ----star patten");
for(let i=1;i<=5;i++){
        console.log("* ".repeat(i));
}


// task 9
console.log("Task-9 ---- game");
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
console.log("Task-10  -----revese the string");
let input='ADHITHYA';
let rev_name='';
console.log("Original string: " + input);

for(let i=input.length-1;i>=0;i--){
    rev_name+=input.charAt(i);
}
console.log("Reverse string: "+ rev_name);