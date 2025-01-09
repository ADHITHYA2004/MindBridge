// task 1

const employees = [ 
    { name: 'John', age: 28 }, 
    { name: 'Anna', age: 22 }, 
    { name: 'Mike', age: 32 },
    ];
    function fun1(i){

        return employees[1];
    }
console.log(funi(employees));





// task 2

const nums1 = [1, 2, 3, 4, 5, 6];
const numb={even:[], odd:[ ]};
for(let x of nums1){
    if(num1%2==0){
        Object.assign(numb)
    }
}




// task4
const arr = [1, 2, 2, 3, 3, 3];
let count=0;
let num=0;
for(let i=0;i<arr.length;i++){
    let temp=arr[i];
    let temp_count=0;
    for(let j=i+1;j<arr.length;j++){
        if(temp==arr[j]){
            temp_count++;
        }
    }
    if(count<temp_count){
        count=temp_count;
        num=arr[i];
    }
}


// task 5

const arr1 = [1, 2, 3]; 
const arr2 = [2, 3, 4];
let arr12 = new Array();
for(let x=0;x<arr1.length;x++){

    for(let y=0;y<arr2.length;y++){
        if(arr1[x]==arr2[y]){
            arr12.push(arr2[y]);
        }
    }
}
console.log(arr12);


// task 6
const arr0 = [ { id: 1, name: 'A' }, { id: 2, name: 'B' }, ];

console.log(Object.keys(arr0));




// task 8
const obj = { a: 1, b: 2 };
console.log(Object.)