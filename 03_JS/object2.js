const tinderUser=new Object();   // create objext like this
tinderUser.id='123abc';
tinderUser.name='tushar';

console.log(tinderUser);   

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"a",
    4:"b"
}

const obj3=Object.assign({},obj1,obj2);      // create another object like this
console.log(obj3)


const obj4={...obj1,...obj2}           

console.log(obj4)


// ! nested object 
const users=[
    {
        name:"tushar",
        age:23,
        qualification:"graduate"
    },{
        name:"deepti",
        age:21,
        qualification:"graduate"
    },{
        name:"trisha",
        age:20,
        qualification:"graduate"
    },{
        name:"somi",
        age:24,
        qualification:"graduate"
    },
]
console.log(users[1]);

console.log(Object.keys(tinderUser));            // get keys

console.log(Object.values(tinderUser));               // get value

console.log(Object.entries(tinderUser))               // key value convert into array 





console.log(tinderUser.hasOwnProperty('name'));


// ! destrictiring object 

const course={
    courseName:"Js in Hindi",
    price:999,
    courseInstructor:"tushar"
}

const{courseName,price,courseInstructor}=course;

console.log(courseName);
console.log(price);
console.log(courseInstructor);




