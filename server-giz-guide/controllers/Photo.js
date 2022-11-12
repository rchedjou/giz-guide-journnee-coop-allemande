/* export const signup = async (req,res,next)=>{
    console.log(req.body)
    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password,salt);
        const newUser = new User({...req.body,password:hash})
        await newUser.save();
        res.status(200).send("User has been created!")
    } catch (err) {
        next(createError(404,"not found sorry!"))
    }
} */

const addPhoto = async (req,res,next)=>{
    
}
const getPhoto = async (req,res,next)=>{

}
const updatePhoto = async (req,res,next)=>{
    
}
export const deletePhoto = async (req,res,next)=>{
    
}

