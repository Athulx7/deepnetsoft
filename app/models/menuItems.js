import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
    category:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true

    }
})

export const menuitems = mongoose.models.menuitems || mongoose.model('menuitems',menuItemSchema)




