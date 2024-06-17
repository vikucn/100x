// 1. WAP to print all the even numbers in an Array

let arr = [20,21,22,23,24,25];

for(let a =0; a<arr.length; a++)
    {
        if(arr[a]%2 == 0)
            console.log(arr[a]);
    }

// 2. WAP to print largest number in an array

let arr1 = [1,2,3,4,5,6,10,7]
let largest = arr1[0];

for(let b =0 ; b<arr1.length ; b++)
    {
        if(arr1[b]>largest)
            largest = arr1[b];
    }

    console.log(largest);

// 3. WAP to print all male's first name given a complex object

let users = [{
    firstname: "vivek",
    gender: "male" },
    {
        firstname: "shyam",
        gender: "male"
    },
    {
        firstname: "riya",
        gender: "female"
    }
]

for(let c = 0 ; c < users.length ; c++)
    {
        if(users[c]["gender"]=="male")
            console.log(users[c]["firstname"]);
    }

// 4. WAP that reverses all the elements of an array

let arr2= [1,2,3,4,5,6]

let temp;
let lastindex = arr2.length-1;
for(let d=0 ; d<(arr2.length/2) ; d++ )
    {
        temp = arr2[d];
        arr2[d] = arr2[lastindex];
        arr2[lastindex] = temp;
        lastindex--;
    }
for(let e =0 ; e < arr2.length ; e++)
    {
        console.log(arr2[e]);
    }