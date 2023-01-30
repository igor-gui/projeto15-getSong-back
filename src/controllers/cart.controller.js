import {
  cartCollection,
  sessionsCollection,
} from "../config/collections.database.js";

export async function getUserCart(req, res) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  if (!token) return res.sendStatus(401);

  try {
    const session = await sessionsCollection.find({ token }).toArray();
    if (!session) {
      return res.sendStatus(401);
    }
    const { userId } = session[0];

    const cartList = await cartCollection.find({ userId }).toArray();
    res.send(cartList);
  } catch (err) {
    console.error(err);
    return res.status(500).send(err.message);
  }
}

export async function postItemInCart(req, res) {
  const cartItem = res.locals.body;
  try {
    await cartCollection.insertOne(cartItem);
    return res.sendStatus(201);
  } catch (err) {
    console.error(err);
    return res.status(500).send(err.message);
  }
}
