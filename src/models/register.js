
const mongoose = require("mongoose")
const url= 'mongodb://localhost/student';
mongoose.connect(url)



async function getData( num)
{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('student');
    let data = await collection.findOne({roll:num},function(error, result) {
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
      let num=document.getElementById('field2');
let pass=document.getElementById('field3');
let nam= document.getElementById('field1');
getData(num,pass,nam);