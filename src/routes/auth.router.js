import { Router } from "express";
import { signUp } from "../controllers/auth.controllers.js";
import { signUpValidation } from "../middlewares/authValidation.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import userSchema from "../schemas/user.schema.js";

const router = Router();

router.post('/sign-up', signUpValidation, validateSchema(userSchema), signUp)

export default  router;
