import { usersCollection } from "../config/collections.database.js"

export async function signUp(req, res) {
    const { body } = res.locals
    try {
        await usersCollection.insertOne(body)
        res.send("Usuário Cadastrado com sucesso!!")
    }
    catch (err) {
        console.error(err)
        res.status(500).send(err.message)
    }
}