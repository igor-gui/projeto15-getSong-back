import { sessionsCollection, usersCollection } from "../config/collections.database.js"
import bcrypt from "bcrypt"

export async function signUp(req, res) {
    const { body } = res.locals
    const hashPassword = bcrypt.hashSync(body.password, 10)
    try {
        await usersCollection.insertOne({...body, password: hashPassword})
        res.send("Usuário Cadastrado com sucesso!!")
    }
    catch (err) {
        console.error(err)
        res.status(500).send(err.message)
    }
}

export async function logIn(req, res) {
    const session = res.locals.body;
    try {
        await sessionsCollection.insertOne(session)
        res.send(session.token)
    }
    catch (err){
        console.error(err)
        return res.status(500).send(err.message)
    }
}