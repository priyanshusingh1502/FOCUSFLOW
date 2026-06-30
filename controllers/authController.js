const users=[];

const registerUser=(req,res)=>{

    const {username,email,password}=req.body;

    if(!username||!email||!password){
        return res.send("All fields are required");
    }

    console.log(req.body);

    const newUser={
        username,
        email,
        password
    };

    users.push(newUser);

    console.log(users);

    res.redirect("/dashboard");

};

const loginUser=(req,res)=>{

    const {email,password}=req.body;

    if(!email||!password){
        return res.send("All fields are required");
    }

    const existingUser=users.find(user=>user.email===email);

    if(!existingUser){
        return res.send("User not found");
    }

    if(existingUser.password!==password){
        return res.send("Incorrect Password");
    }

    res.redirect("/dashboard");

};

module.exports={
    registerUser,
    loginUser
};