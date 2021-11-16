const express= require ("express");
const cors =require('cors')
const app = express()
const PORT = 3001;
const house = require("./routes/house");
app.use(cors({origin: 'http://localhost:3001'}))
app.use(express.json());
app.use('/house',house) 
const bcrypt = require ('bcrypt')

const users=[]
app.get ('/users', ( req,res)=>{
    res.json(users)
})

app.post('/users', async ( req,res)=>{
    try{
        console.log("inside the post")
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        const user = {name: req.body.name , password:  hashedPassword}
    users.push(user)
    res.status(201).send()
    }
   catch{
       res.status(500).send()
   }
})
app.post('/users/login', async (req ,res)=>{
    const user = users.find(user=> user.name=req.body.name)
    if (user == null){
        return res.status(400).send('Can not find user')
    }
    try{
       if (await  bcrypt.compare(req.body.password , user.bassword)){
           res.send('Success')
       }else{
        res.send('not allowed')

       }
    }catch{
            res.status(500).send()
        }
    
})
 


app.listen(PORT , (err)=>{
    if (err){
        return console.log("ERROR" , err)
    }
    console.log("Listening on port" +PORT)
})