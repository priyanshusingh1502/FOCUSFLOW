const express=require("express");

const router=express.Router();

const {registerUser,loginUser}=require("../controllers/authController.js");

router.get("/",(req,res)=>{
    res.render("home");
});

router.get("/login",(req,res)=>{
    res.render("login");
});

router.post("/login",loginUser);

router.get("/register",(req,res)=>{
    res.render("register");
});

router.post("/register",registerUser);

router.get("/dashboard",(req,res)=>{
    res.render("dashboard");
});

module.exports=router;