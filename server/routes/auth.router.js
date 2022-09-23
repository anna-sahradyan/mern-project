import {Router} from "express";
import {register,login,getMe} from "../controllers/auth.controll.js";
import {checkAuth} from "../utils/checkAuth.js";
const router = new Router();
//!REGISTER
router.post("/register",register);
//!LOGIN
router.post("/login",login);
//!GET ME
router.get("/getme",checkAuth,getMe);

export default router;