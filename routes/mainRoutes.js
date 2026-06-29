const express=require("express");

const router=express.Router();

router.get("/",(req,res)=>{
    res.render("home");
});

router.get("/login",(req,res)=>{
    res.render("login");
});

router.get("/register",(req,res)=>{
    res.render("register");
});

router.post("/register",(req,res)=>{
    console.log(req.body);
    res.redirect("/dashboard");
});

router.get("/dashboard",(req,res)=>{
    res.render("dashboard");
});

module.exports=router;