export function validateSchema(schema) {
    return (req, res, next) => {
        const { body } = res.locals
        const { error } = schema.validate(body, {abortEarly: false})
        if(error){
            const errorMessages = error.details.map(detail => detail.message)
            return res.status(422).send(errorMessages)
        }
        next()
    }
}