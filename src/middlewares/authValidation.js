import { usersCollection } from "../config/collections.database.js";
import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";

export async function signUpValidation(req, res, next) {
  const { email, password, confirmPassword, name } = req.body;
  const passwordsMatch = password === confirmPassword;
  if (!passwordsMatch)
    return res.status(422).send("As senhas precisam ser iguais.");
  try {
    const userExists = await usersCollection.findOne({ email });
    if (userExists)
      return res.status(409).send({ message: "Email Já cadastrado." });
    res.locals.body = { email, password, name };
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
  next();
}

export async function loginValidation(req, res, next) {
  const { email, password } = req.body;
  const token = uuidV4();

  try {
    const userExists = await usersCollection.findOne({ email });
    const rightPassword = bcrypt.compareSync(password, userExists.password);
    if (!userExists || !rightPassword)
      return res.status(404).send("Email ou senha incorretos");
    res.locals.body = { token, userId: userExists._id.toString() };
    console.log(res.locals.body);
  } catch (err) {
    console.error(err);
    return res.status(500).send(err.message);
  }
  next();
}
