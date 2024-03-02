//endpoints in server 
//endpoints are defined in a list called api's
//server only knows endpoints
//server is up/live
//server is down/dead
//server only knows and works on endpoints



const notes=require('./notes.js')

//lodash is a library includes many function used for production in data managemnt
var _=require('lodash')

console.log("server file is available");

let age=notes.age;
console.log(age);

let result=notes.addnumber(age,13);
let data=["shubham","shubham",1,2,2,3,3,3,1,"deepika","deepika"];

console.log(result);

let filter=_.uniq(data);
console.log(filter);