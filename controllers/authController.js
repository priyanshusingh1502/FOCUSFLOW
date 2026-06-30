const registerUser=(req,res)=>{

    const {username,email,password}=req.body;

    if(!username||!email||!password){
        return res.send("All fields are required");
    }

    console.log(req.body);

    res.redirect("/dashboard");

};

const loginUser=(req,res)=>{

    const {email,password}=req.body;

    if(!email||!password){
        return res.send("All fields are required");
    }

    console.log(req.body);

    res.redirect("/dashboard");

}

module.exports={
    registerUser,
    loginUser
};