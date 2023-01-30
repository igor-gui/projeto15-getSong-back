import joi from "joi";

const cartSchema = joi.object({
  userId: joi.required(),
  name: joi.string().min(3).required(),
  // price: joi.string().required(),
  // img: joi.string().required(),
});

export default cartSchema;
