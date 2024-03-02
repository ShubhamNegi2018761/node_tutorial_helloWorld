const mongoose=require('mongoose')

//define the person schema
const menuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:["sweet","spicy","sour"],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:String,
        enum:['chicken wings','spices','sauce'],
        required:true
    },
    num_sales:{
        type:Number,
        default:0,
        required:true
    }
    
})

//create models using this schema
const Menu=mongoose.model('Menu',menuSchema);
module.exports=Menu;