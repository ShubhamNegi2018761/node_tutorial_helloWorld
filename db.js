const mongoose=require('mongoose');

//define the MongoDb url
const mongoURL='mongodb://localhost:27017/hotels' //it will create a database named hotels in the mongodb when connection establish


//conection establishing
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//mongoose maintains a default connection object represting the mongoDB connnection called db
//db established the bridge between MONGOdb database and the nodejs
//you can define event listener in the database with db
const db=mongoose.connection;
db.on('connected',()=>{
    console.log("connection is made");
})
db.on('error',(err)=>{
    console.log("error is occured",err);
})

db.on('disconnected',()=>{
    console.log("connection is disconnected");
})

//export the database connection

module.exports=db;


