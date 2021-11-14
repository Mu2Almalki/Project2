const express= require ("express");
const cors =require('cors')
const app = express()
const PORT = 3001;
const house = require("./routes/house");
app.use(cors({origin: 'http://localhost:3001'}))
app.use(express.json());
app.use('/house',house) 

app.listen(PORT , (err)=>{
    if (err){
        return console.log("ERROR" , err)
    }
    console.log("Listening on port" +PORT)
})