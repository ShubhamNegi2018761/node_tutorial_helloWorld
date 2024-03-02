//knowdays express is used for making server
//server can be made on localsystem called "localhost" is the address of our own computer server
//server runs on localhost in our own computer in a partiicular port ex localhost:5500
let express=require('express');

let db=require('./db')
 
let Menu=require('./models/menu') 
//app is used for request response
//app is the instance of the express
const app=express();

let bodyParser=require('body-parser');
app.use(bodyParser.json()); //req.body


//these are the end points
app.get('/',function(req,res){
    res.send('hello server')
})
app.get('/vegeterian',function(req,res){
    var order={
        name:"rava dal",
        size:"10 cm",
        is_chutney:false
    }
    res.send(order)
})
app.get('/chicken',function(req,res){
    var order={
        name:"chicken chana",
        size:"half plate with butter",
        is_chutney:true
    }
    res.send(order)
})

 

app.post('/menu',async (req,res)=>{
    try {
     const data=req.body //Assuming the request body contains  the person data
  
     // newPerson.name=data.name;
     // newPerson.age=data.age; 
 
     
     //creating a new person document using the Mongoose model
     const newMenu=new Menu(data);
      
 
     //save the new person to the database
 
    let response =await newMenu.save();
    console.log('data saved in menu');
    res.status(200).json(response);
    } catch (error) {
     console.log(error);
     res.status(500).json({error:"internal server error in menu"});
    }
 
 })

//import the router files
 const personRoutes=require('./routes/personRoutes')
 app.use('/person',personRoutes);

 

app.listen(3000,()=>{
    console.log("server is listening on port 3000");
});