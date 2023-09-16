const  express = require("express");
const path = require ("path");
const router = express.Router();
const {upload} = require("../middileware/multer");
const ErrorHandler = require("../utils/ErrorHandler");

router.post("/create-user",upload.single("file"), async (req,res)=>{
    const {name,email,number,password}=req.body;
    const userEmail = await User.findone({email});

    if(userEmail){
            return next(new ErrorHandler("user already exist", 400));

    }
    const filename = req.file.filename;
    const fileUrl =path.join(filename);

    

    const user = {
    name: name,
    email: email,
    number: number,
    password: password,
    avatr : fileUrl
};
console.log(user)
})
 
module.exports = router;