const express=require("express");
const app=express();
const PORT=8080;

app.get("/",(req,res)=>{
    res.send("Welcome to FocusFlow");
});

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`);
});