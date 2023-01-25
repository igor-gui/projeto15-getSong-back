import db from "./db.database.js";



export const usersCollection = await db.collection('users');
export const sessionsCollection = await db.collection('sessions');