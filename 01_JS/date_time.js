let MyDate=new Date();
console.log(MyDate)

// Standard time 
console.log(MyDate.toString())

// to get date only 
console.log(MyDate.toDateString())

// to get  date and time 
console.log(MyDate.toLocaleString())



// type of data is object 
console.log(typeof MyDate)

let MyCreatedDate=new Date(2023,0,23);
console.log(MyCreatedDate)

let myTimeStamp=Date.now()
console.log(myTimeStamp)  // in ms

// in sec 
console.log(myTimeStamp/1000)