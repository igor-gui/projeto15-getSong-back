import { Router } from "express";
import { logIn, signUp } from "../controllers/auth.controllers.js";
import { loginValidation, signUpValidation } from "../middlewares/authValidation.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import sessionSchema from "../schemas/session.schema.js";
import userSchema from "../schemas/user.schema.js";

const router = Router();

router.post('/sign-up', signUpValidation, validateSchema(userSchema), signUp)
router.post('/sign-in', loginValidation, validateSchema(sessionSchema), logIn)

export default  router;
