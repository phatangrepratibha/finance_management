import mongoose from "mongoose";

const TranSchema=new mongoose.Schema({

    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    
    amount:{
        type:Number,
        require:[true,"Amount is required"]
    },

    type:{
        type:String,
        require:[true,"Amount is required"]
    },

    category:{
        type:String,
        require:[true,"Category is required"]
    },
    
    date:{
        type:Date,
        require:[true,"Date is required"]
    },

    reference:{
        type:String 
    },

    description:{
        type:String,
        require:[true,"Description is required"]
    },

    
},{timestamps:true});


const Transaction=mongoose.model("transaction",TranSchema);

export default  Transaction;