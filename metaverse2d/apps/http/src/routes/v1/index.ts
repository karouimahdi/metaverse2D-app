import { Router } from "express";
export const router=Router();

import { userRouter } from "./user";
import { spaceRouter } from "./space";
import { adminRouter } from "./admin";
router.get("/signup",(req,res)=>{
  
})
router.get("/signin",(req,res)=>{
    
})
router.get("/elements", async (req, res) => {
    
})

router.get("/avatars", async (req, res) => {
   
})

router.use("/user", userRouter)
router.use("/space", spaceRouter)
router.use("/admin", adminRouter)