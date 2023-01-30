import { Router } from "express";
import { logIn, signUp } from "../controllers/auth.controllers.js";
import { getUserCart, postItemInCart } from "../controllers/cart.controller.js";
import {
  loginValidation,
  signUpValidation,
} from "../middlewares/authValidation.js";
import { validateItemPost } from "../middlewares/cartValidation.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import sessionSchema from "../schemas/session.schema.js";
import userSchema from "../schemas/user.schema.js";
import cartSchema from "../schemas/cart.schema.js";

const router = Router();

router.post("/sign-up", signUpValidation, validateSchema(userSchema), signUp);
router.post("/sign-in", loginValidation, validateSchema(sessionSchema), logIn);

router.get("/home", getUserCart);
router.post(
  "/home",
  validateItemPost,
  validateSchema(cartSchema),
  postItemInCart
);

export default router;
