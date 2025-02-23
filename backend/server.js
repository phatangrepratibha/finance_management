import express from "express"
import router from "./routes/user-routes.js";
import router1 from "./routes/transaction-routes.js";
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
import errorMiddleware from "./middleware/error-middleware.js";
import cors from "cors"

const app=express();

const corsOptions={
    origin:"http://localhost:5173",
    methods:"GET ,POST,DELETE,PUT,PATCH,HEAD",
    credential:true


};



dotenv.config();
app.use(cors(corsOptions)); 
const PORT=3000;
app.use(express.json())
app.use(router)
app.use(router1)
app.use(errorMiddleware);


connectDB().then(()=>{


app.listen(3000,()=>{
    console.log(`server listening on :${PORT}`);
})
})