import { usersCollection } from "../config/collections.database.js";

export async function signUpValidation(req, res, next) {
    const { email, password, confirmPassword, name } = req.body;
    const passwordsMatch = password === confirmPassword
    if (!passwordsMatch) return res.status(422).send('As senhas precisam ser iguais.')
    try {
        const userExists = await usersCollection.findOne({ email })
        if (userExists) return res.status(409).send({ message: "Email Já cadastrado." })
        res.locals.body = { email, password, name }

    }
    catch (err) {
        console.error(err)
        res.status(500).send(err.message)

    }
    next()
}