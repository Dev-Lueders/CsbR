import mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connect() {
    try {
        await client.connect();
        const db
    }
}