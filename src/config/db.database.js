import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config()

const mongoClient = new MongoClient(process.env.DATABASE_URL)

let db;

try {
    await mongoClient.connect()
    db = mongoClient.db()
}
catch (err) {
    console.error(err)
    res.status(500).send(err.message)
}

export default db;
