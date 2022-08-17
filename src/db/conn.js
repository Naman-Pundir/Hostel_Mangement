const {MongoClient, default: mongoose} = require("mongoose")
const url= 'mongodb://localhost/hostelers';
mongoose.connect(url).then(()=>{

console.log(`connection successful`);}).catch((e)=>{
    console.log(`connection not successful`)  ;
})


