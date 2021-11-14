const express = require("express")
let router =express.Router();
const house =require( '../house.json')


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
        
        id :house.length+1,
        img:req.body.img,
        title:req.body.title,
        location:req.body.location,
        price:req.body.price,
        detils:req.body.detils,
    }
    house.push(newhouse);
    res.send(house)
})


router.delete("/delete/:id", (req, res) => {
    id = req.params;
    let deletedhouse = house.splice(id, 1);
  
    res.send(house);
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