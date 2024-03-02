const { log } = require('console');
var fs=require('fs');
var os=require('os');

console.log("server file is running");
console.log("node is running");


let add=function(a,b){
    return a+b;
}
let  result=add(21,33)
console.log(result);
console.log(add(44,44));
console.log(add);

//IIFI's
(
    function(){
        console.log("shubham negi is running");
    }
)()

function callback(res,call){
         console.log("callback is running ");
         console.log("your result is ",res);
         call(res);
}

function lastvalue(res){
         console.log("last value is ",res);
}

const addvalue=function(a,b,callback){
      var res=a+b;
      console.log("result is calculated");
      callback(res,lastvalue);
}

addvalue(12,21,callback)

//inline callback
function adddecent(a,b,call){
        call();
}
adddecent(2,3,()=>console.log("added completed"))

var user=os.userInfo();
console.log(user);

fs.appendFile('greeting.txt','hii'+user.username+'!',()=>{
    console.log("file is creating");
})

console.log(os);
console.log(fs);