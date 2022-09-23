import {Router} from "express";
import {register,login,getMe} from "../controllers/auth.js"
const router = new Router();
//!REGISTER
router.post("/register",register);
//!LOGIN
router.post("/login",login);
//!GET ME
router.get("/getMe",getMe);

export default router;