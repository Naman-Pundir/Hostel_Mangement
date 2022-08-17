const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");

const port =3000;
const {MongoClient} = require('mongodb')
const url= 'mongodb://localhost:27017';
const databaseName='hostelers'

const client= new MongoClient(url);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// const static_path=path.join(__dirname,"../front");
// console.log(static_path);
// app.use(express.static(static_path));

app.use(express.static('views/images')); 

app.set("view engine","hbs");
app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/login.hbs",function(req,res){
    res.render("login");
});  
app.get("/index.hbs",function(req,res){
    res.render("index");

});  
app.get("/hostel.hbs",function(req,res){
  res.render("hostel");

}); 

app.post("/login",async(req,res)=>{
  try{
  const nam =req.body.nam;
  const user =req.body.user;
  const pass =req.body.pass;

  console.log(`${nam} ,${user}`);
  

async function getData( user)
{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('student');
    let data = await collection.findOne({roll:user},function(error, result) {
        if (!error) {
          if (result) {

            
            console.log("registered");
              // res.send("registered");
              res.render("hostel.hbs");

            
          } else {
            console.log("not registered");
            res.send("not registered");

          }
        } else {
          console.log("MongoDB error");
        }
      });

    


}
     
getData(user);




  }
catch(error){
    res.status(400).send("invalid")
}

})


app.post("/hostel",async(req,res)=>{

try{

  const roomn =req.body.roomn;

  console.log(`${roomn} `);
  

async function getData( roomn)
{
    let result = await client.connect();
    dbs= result.db(databaseName);
    collection = dbs.collection('room');
    let data = await collection.findOne({room:roomn},function(error, result) {
        if (!error) {
          if (result) {

            
            console.log("NOT AVAILABLE");
              res.send("NOT AVAILABLE");

            
          } else {
            console.log("Available");
            res.send("availble");

          }
        } else {
          console.log("MongoDB error");
        }
      });

    


}
     
getData(roomn);




  }
catch(error){
    res.status(400).send("invalid")
}
}





)

app.listen(port,()=>{
    console.log(`Listening to port at ${port}`);
})
