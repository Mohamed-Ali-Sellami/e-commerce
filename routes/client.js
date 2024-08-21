const express = require('express');
const clientRouter = express.Router();
const Client = require('../models/client');


// Add
clientRouter.post('/add', async (req, res) => {
  try {
    const newClient = new Client(req.body);
    const result = await newClient.save();
    res.send({ client: result, msg: "Client ajouté" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Erreur lors de l'ajout du client" });
  }
});

//get
clientRouter.get('/all',async(req,res)=> {
  try {
    let result= await Client.find()
    res.send({client:result,msg:"Tous les clients"})
  } catch (error) {
    console.log(error);
  }
  })

  //getbyID
clientRouter.get('/:id',async(req,res)=> {
  try {
    let result= await Client.findById({_id:req.params.id})
    res.send({produit:result,msg:"client detaillé"})
  } catch (error) {
    console.log(error);
  }
  
  })


  //delete

clientRouter.delete('/:id',async(req,res)=> {
  try {
    let result= await Client.findByIdAndDelete({_id:req.params.id})
    res.send({produit:result,msg:"client detruit"})
  } catch (error) {
    console.log(error);
  }
  
  })

  //update
clientRouter.put('/:id',async(req,res)=> {
  try {
    let result= await Client.findByIdAndUpdate({_id:req.params.id}, {$set:req.body})          //parametre lawal id w thani chniya bech nbadel
    res.send({produit:result,msg:"client detaillé"})
  } catch (error) {
    console.log(error);
  }
  
  })
















module.exports = clientRouter;

