
import express from 'express';
import { userRoutes } from './routes/user-routes.js';
import { videoRoutes } from './routes/video-routes.js';
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json());
app.use('/',userRoutes);

app.use('/',videoRoutes)
// app.use('/',ideRoutes);
app.use((request,response,next)=>{
    response.json({message:'invalid URL'});
})
const server =
app.listen(4567,(err)=>
{
    if (err){
        console.log('server crash',err);
    }
    else {
    console.log('server up and running',
    server.address().port); }
} )