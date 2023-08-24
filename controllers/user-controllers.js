import { userModel} from "../db/models/user-schema.js";
import { hashing } from "../utils/encrypt.js";
export const  userController ={

    login (request,response){
        const userInfo = request.body;
        const doc = userModel.findOne({'email': userInfo.email}).exec();

       console.log('doc is ', doc);
        if(doc && doc._id){
            const plainPasswod = userInfo.password;
            const dbPassword = doc.password;    
           if (   hashing.matchPassword(plainPasswod,dbPassword) )   
           { response.json({message:'WELCOME'+ doc.name});       
        
             }
        else { response.json ({message: 'Invalid Userid or Password '}) ; } 

         } else {   response.json ({message: 'Invalid Userid or Password '});  }
        
        // console.log('Request body is ',body);
        // if (userInfo.userid== userInfo.password)
        // {
        //     response.json({message:'Welcome' +userInfo.userid });
        //  } 
        // else
        // {  
        //      response.json({message:'Invalid userid or password'});
        // }
        // response.json({message:'Login'});
    },
    async register (request,response){

        const userInfo = request.body;
       userInfo.password=  hashing.passwordHash(userInfo.password);
        try {
            const doc = await userModel.create(userInfo);
            if(doc&& doc._id){response.json({message:'Register SuccessFully'});
         } else { response.json({message:'Problems in register'}); }
        }
       catch (err){
        console.log('Register Err ', err);
        response.json({message: 'Problem in registration '});
       }
    },
    profile (request,response){
        const userName = request.params.userName;
        console.log('All params',userName);
        response.json({message:userName +'Profile'});
    },
    changePassword (request,response){
        response.json({message:'Change Password'});
    }
}