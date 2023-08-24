const URL = 'mongodb+srv://krishan:admin1234@cluster0.urykn5k.mongodb.net/userdb?retryWrites=true&w=majority';

import mongoose from "mongoose" ;

const promise = mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });


promise.then(data=>{
    console.log('DB connected...');
}) .catch(err=>{
    console.log('Error During Dbconnection ', err);

})
export default mongoose;