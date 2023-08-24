import express from 'express';
import { userController } from '../controllers/user-controllers.js';

export const userRoutes = express.Router();

userRoutes.get('/profile/:username',userController.profile);
userRoutes.post ('/login',userController.login);
userRoutes.post('/register',userController.register);
// userRoutes.put('/change-password');
// userRoutes.delete('/remove-account');


//CRUD operation 