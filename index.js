
const {MongoClient} = require('mongodb')
const url= 'mongodb://localhost:27017';
const databaseName='hostelers'
const client= new MongoClient(url);

async function getData( user)
{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('student');
    let data = await collection.findOne({roll:user},function(error, result) {
        if (!error) {
          if (result) {
            console.log("registered");
          } else {
            console.log("not registered");
          }
        } else {
          console.log("MongoDB error");
        }
      });

    


}
     
getData(user);