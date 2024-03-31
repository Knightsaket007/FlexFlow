const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const url = 'mongodb+srv://saketsourav3:p4HdDqiyZOV1UPlf@cluster007.ogzb6xm.mongodb.net/';
const url = process.env.DB_HOST;
// const url = 'mongodb://${process.env.DB_HOST}:27017';
const client = new MongoClient(url);
const dbName = 'FlexFlow';


async function UserData() {
  try {
    let conn = await client.connect();
    console.log('Connected successfully to server');
    const db = conn.db(dbName);
    return db.collection('user');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err; // or handle the error appropriately
  }
  }
async function compo() {
  try {
    let conn = await client.connect();
    console.log('Connected successfully to server( component)');
    const db = conn.db(dbName);
    return db.collection('components');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err; // or handle the error appropriately
  }
  }

  module.exports = {UserData, compo};