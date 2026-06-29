const express=require("express");

const router=express.Router();

router.get("/",(req,res)=>{
    res.render("home");
});

router.get("/login",(req,res)=>{
    res.render("login");
});

router.post("/login",(req,res)=>{

    const {email,password}=req.body;

    if(!email||!password){
        return res.send("All fields are required");
    }

    console.log(req.body);

    res.redirect("/dashboard");

});

router.get("/register",(req,res)=>{
    res.render("register");
});

router.post("/register",(req,res)=>{

    const {username,email,password}=req.body;

    if(!username||!email||!password){
        return res.send("All fields are required");
    }

    console.log(req.body);

    res.redirect("/dashboard");
});

router.get("/dashboard",(req,res)=>{
    res.render("dashboard");
});

module.exports=router;