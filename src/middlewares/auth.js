const adminAuth = (req,res,next) =>{
    console.log("Checking admin authorisation");
    let token = "xyz";
    let isAuthorised = token === "xyz"
    if(isAuthorised){
        next();
    }else{
        throw new Error("Unauthorised user");
    }
}

const userAuth = (req,res,next) =>{
    console.log("Checking user authorisation");
    let username = "Test@gmail.com";
    let password = "Test123";
    let isAuthorised = (username === "Test@gmail.com") && (password === "Test123"); 
    if(isAuthorised){
        next();
    }else{
        throw new Error("Unauthorised user");
    }
}

module.exports = {
    adminAuth,
    userAuth
}