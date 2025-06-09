import express, { Router } from "express"
import {register, login, logout, profile} from '../controller/auth.controller.js';
import { requiredAuth } from "../middleWares/tokenvalidation.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
import { validateSchema } from "../middleWares/validator.midelware.js";

const router = Router();

router.post('/register',validateSchema(registerSchema),register);
router.post('/login',validateSchema(loginSchema),login);
router.post('/logout',logout);
router.get('/profile',requiredAuth,profile);

export default router;
