//knowdays express is used for making server
//server can be made on localsystem called "localhost" is the address of our own computer server
//server runs on localhost in our own computer in a partiicular port ex localhost:5500
let express=require('express');

let db=require('./db')
let Person=require('./models/Person') 
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

app.post('/person',async (req,res)=>{
   try {
    const data=req.body //Assuming the request body contains  the person data
 
    // newPerson.name=data.name;
    // newPerson.age=data.age; 

    
    //creating a new person document using the Mongoose model
    const newPerson=new Person(data);
     

    //save the new person to the database

   let response =await newPerson.save();
   console.log('data saved');
   res.status(200).json(response);
   } catch (error) {
    console.log(error);
    res.status(500).json({error:"internal server error"});
   }

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



app.get('/person',async (req,res)=>{
    try {
        const data=await Person.find();
        console.log('data fetched');
        let row1=data[0]; 
        res.status(200).json(data); 
         
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error"});
    }
})


//parametrized routing from database
app.get('/person/:workType',async (req,res)=>{
   
    try {
        const workType=req.params.workType;
        if(workType=='chef' || workType=='manager' || workType=='waiter'){
          const response=await Person.find({work:workType});
          console.log("response fetched");
          res.status(200).json(response[0].id);
        }
        else{
            res.status(404).json({error:"invalid work type"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal error is occured"});
    }
     
})


app.listen(3000,()=>{
    console.log("server is listening on port 3000");
});