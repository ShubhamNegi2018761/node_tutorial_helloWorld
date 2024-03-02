const express=require('express');
const router=express.Router();
let Person=require('../models/Person') 

//post route to add person
router.post('/',async (req,res)=>{
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

 
router.get('/',async (req,res)=>{
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
router.get('/:workType',async (req,res)=>{
   
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


//to update the record we use put and we can identify the record by using the uniqueue

router.put('/:id',async (req,res)=>{
   
    try {
        const personid=req.params.id;
        const updatedData=req.body;
        const response=await Person.findByIdAndUpdate(personid,updatedData,{
            new:true, //return the updated data
            runValidators:true ,//run amongoose validators
        })
        if(!response){
            return res.status(404).json({error:"person is not available"});
             
        }
        console.log("data updated");
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"person not founf"});
    }
     
})

//to delete a record from person
router.delete('/:id',async (req,res)=>{
   
    try {
        const personid=req.params.id; 
        const response=await Person.findByIdAndDelete(personid)
        if(!response){
            return res.status(404).json({error:"person is not available"});
             
        }
        console.log("data deleted");
        res.status(200).json({message:"person deleted succefssfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"person not founf"});
    }
     
})


module.exports=router;
