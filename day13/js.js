// task 1

const employees = [ 
    { name: 'John', age: 28 }, 
    { name: 'Anna', age: 22 }, 
    { name: 'Mike', age: 32 },
    ];

    employees.sort((x,y)=>{
        return x.age-y.age;
    })
console.log(employees);



// task 2

const nums1 = [1, 2, 3, 4, 5, 6];
const numb={
    odd: nums1.filter((i, index) => (index+1)%2==0),
    even: nums1.filter((i,index) =>(index+1)%2 !=0)
}
console.log(numb);


// task 3

const data = [ { id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'C' }, ];
let ans3=[];
data.filter( i =>{
    if(!ans3.some(ansobj=>ansobj.id==i.id))
        ans3.push(i);
})
console.log(ans3);

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
const arr6 = [ { id: 1, name: 'A' }, { id: 2, name: 'B' }, ];
let ans6={};
arr6.filter((i)=>{
    ans6[i.id]=i.name;
})
console.log(ans6);

// task 7
const arr7 = [1, 2, 2, 3, 4, 4, 5];
let count7=0;
const ans7=[];
for(let i of arr7){
    let tempcount=0
    for(let j=i+1;j<arr7.length;j++){
        if(arr7[i]==arr7[j]){
            tempcount++;
        }
    }
    if(tempcount==0){
        ans7.push(arr7[i])
    }
}
console.log(ans7)

// task 7

const arr_7 = [1,2,2,3,4,4,5];
let result_7 = arr7.filter((i,j)=>{
    if(arr7.indexOf(i)!=j)
        return i;
}
);

// result_7  = arr_7.reduce((val, item) => {
//     val[item] = (val[item] || 0) + 1; 
//     // 1=
//     return index;
// }, {});  
// // 
// const unique = Object.keys(result_7).filter(key => result_7[key] === 1);
// console.log(unique);

// task 8
const obj = { a: 1, b: 2 };
let ans=[];
Object.entries(obj).filter(item=>{
    ans.push(item)
})
console.log(ans);


// task 9
const obj1 = { a: 1, b: 2, c: 3 };

let ans9=Object.fromEntries(Object.entries(obj1).filter(([key, value])=>
    value <= 2));

console.log(ans9)



// task 10
let arr110 = [1, 2, 3, 5]
let b = [4, 7,3]
let c = 6
let arr10=[arr110,b,c];
let arr11=arr10.flat()
arr12=arr11.filter((i, j)=>{
    if(arr11.indexOf(i)==j)
    return i;
})

console.log(arr12)