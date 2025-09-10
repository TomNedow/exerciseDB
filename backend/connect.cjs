const {MongoClient} = require('mongodb');
require('dotenv').config({path: "./.env"}); // loads .env

async function main() {
    const Db = process.env.ATLAS_URI;
    const client = new MongoClient(Db);

    
try{
        
    await client.connect();
    const collection = await client.db("Exercises").collections();
    collection.forEach((collection) => console.log(collection.s.namespace.collection));

} catch(err){
    console.error("❌ MongoDB error:", err);
} finally{
    await client.close();
}


}

main()

