const express=require("express");
require("dotenv").config();

const app=express();

const PORT=process.env.PORT||8080;


app.set("view engine","ejs");

const mainRoutes=require("./routes/mainRoutes");
app.use("/",mainRoutes);

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`);
});