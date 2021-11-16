const express = require("express")
let router =express.Router();
const house =require( '../house.json')

let uniqid = require('uniqid')
// __________________________________
let fs =require('fs')

    // ____________________________________


router.get('/home', (req , res)=>{
    console.log("We are online")
    res.send(house)
})


router.get('/details/:id', (req , res)=>{
  let found=house.find(function(item){
    return item.id===parseInt(req.params.id)
  })
  if(found){
    res.send(found)
  }
  else{
    res.sendStatus(404)
  }
  console.log("We are online")
})

router.post('/post', function(req ,res ){
    const newhouse={
        id :uniqid(),
        img:req.body.img,
        title:req.body.title,
        location:req.body.location,
        price:req.body.price,
        detils:req.body.detils,
    }
    house.push(newhouse);
    fs.writeFile("house.json",JSON.stringify(house), function(err , data){
      if (err) throw err;
      res.send(newhouse);
      return res.end();
  })
})

router.get('/search/:search'),function(req,res){
  let found=house.find(function(item){
    return item.title===req.params.search
  })
  if(found){
    res.send(found)
  }
  else{
    res.sendStatus(404)
  }
}

router.delete("/delete/:id", (req, res) => {
  let found=house.find(function(item){
    return item.id===req.params.id
  })
  if(found){
    let targetindex=house.indexOf(found)
    house.splice(targetindex,1)
    res.send(found)

  }
  else{
    res.sendStatus(404)
  }
  
  });
  
  
  router.put("/putHouse/:id", (req, res) => {
    let found = house.find(function (item) {
      return item.id === parseInt(req.params.id);
    });
    console.log(house)
    if (found) {
      let update = {
        id :found.id,
        img:req.body.img,
        title:req.body.title,
        location:req.body.location,
        price:req.body.price,
        detils:req.body.detils,
      };
      let targetIndex = house.indexOf(found);
      house.splice(targetIndex, 1, update);
      res.send(house);
    } else {
      res.sendStatus(404);
    }
  });

  module.exports= router;