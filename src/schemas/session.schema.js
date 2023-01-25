import joi from "joi"

const sessionSchema = joi.object({
    token: joi.string().required(),
    userId: joi.required()
})

export default sessionSchema;