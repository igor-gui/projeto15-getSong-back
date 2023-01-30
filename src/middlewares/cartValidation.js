import {
  itemsCollection,
  sessionsCollection,
} from "../config/collections.database.js";

export async function validateItemPost(req, res, next) {
  const { itemName } = req.body;
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  if (!token) return res.sendStatus(401);

  try {
    const session = await sessionsCollection.find({ token }).toArray();
    if (!session) {
      return res.sendStatus(401);
    }
    const { userId } = session[0];
    // const itemExists = await itemsCollection.findOne({ itemName });
    // if (!userId || !itemExists) {
    //   return res.status(401);
    // }
    res.locals.body = {
      userId: userId,
      name: itemName,
    };
  } catch (err) {
    console.error(err);
    return res.status(500).send(err.message);
  }
  next();
}
