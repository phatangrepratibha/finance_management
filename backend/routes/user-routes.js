import express from "express"
import {home,login,register,user} from "../controller/user-controller.js";
import validate from "../middleware/validate-middleware.js";
import { signupSchema,loginSchema } from "../validator/user-validator.js";
import authMiddleware from "../middleware/auth-middleware.js";

const router=express.Router();

router.route("/").get(home);
router.route("/register").post(validate(signupSchema),register)
router.route("/login").post(validate(loginSchema),login)
router.route("/user").get(authMiddleware,user);


export default router;