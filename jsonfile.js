//json is transffered as string and then by using JSON.parse method we can convert the json string into the object
//json is transffered as a string from one server to another server or frontend
//json is a string type

//converting json into the object format
const jsonString='{"name":"shubham negi","age":"30","city":"dehradun"}';


const jsonObject=JSON.parse(jsonString);
console.log(jsonObject);

//convert object into the json format
const objectToConvert={
    name:"shubham negi",
    age:25,
    love:"deepika"
}

const json=JSON.stringify(objectToConvert);
console.log(json);

console.log(typeof json);


