
const {MongoClient} = require('mongodb')
const url= 'mongodb://localhost:27017';
const databaseName='hostel'
const client= new MongoClient(url);


var num ='46';
async function getData(num)
{
     let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('room');
    
    let data = await collection.findOne({room:num},function(error, result) {
        if (!error) {
          if (result) {
            console.log("ROOM NOT AVAILABLE");
          } else {
            console.log("ROOM AVAILABLE");
          }
        } else {
          console.log("MongoDB error");
        }
      });
    
    


}

getData(num);
