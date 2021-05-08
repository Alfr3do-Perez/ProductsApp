import Roles from '../models/Role'
import User from '../models/User';

export const checkDuplicateUsernameOrEmail = async (req,res,next)=>{
    const user = await User.findOne({username: req.body.username});

    if(user) {return res.status(400).json({message:"The user alredy exist"})}

    const email = await User.findOne({email: req.body.email});

    if(email) {return res.status(400).json({massage:"The email alredy exist"})}

    next();
}

export const checkeRolesExisted = async(req,res,next)=>{
    if(req.body.roles){
        const ROLES = await Roles.find();
        console.log(ROLES)

        for(let i=0; i < req.body.roles.length; i++){
           if(!await Roles.findOne({name: req.body.roles[i]})){
                return res.status(400).json({message: "Role "+req.body.roles[i]+" does not exist"})
           }
        }
    }
    next();
   }