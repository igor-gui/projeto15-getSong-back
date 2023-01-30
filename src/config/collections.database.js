import db from "./db.database.js";

export const usersCollection = await db.collection("users");
export const sessionsCollection = await db.collection("sessions");

export const cartCollection = await db.collection("cart");
export const itemsCollection = await db.collection("items");
