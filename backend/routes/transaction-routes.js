import express from "express"
import { addTransaction,getTransaction,updateTransaction,deleteTransaction } from "../controller/transaction-controller.js";
import authMiddleware from "../middleware/auth-middleware.js"
const router1=express.Router();

router1.route("/addtran").post(authMiddleware,addTransaction);

router1.route("/gettran").post(authMiddleware,getTransaction);

router1.route("/updatetran/:id").put(authMiddleware, updateTransaction);
router1.route("/deletetran/:id").delete(authMiddleware, deleteTransaction);

export default router1;