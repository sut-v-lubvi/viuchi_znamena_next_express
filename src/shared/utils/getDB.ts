import { MongoClient } from 'mongodb';

export const getDB = async () => {
  const client = new MongoClient(process.env.MONGODB_URI || '');
  await client.connect();
  const db = client.db();
  return db
}