const express = require('express');
const Taxe = require('../Module/taxe');
const axios = require('axios')
const calculeTax = require('../Services/taxService');
const { getTodoById } = require('../Services/todo');
var router = express.Router();
var taxe = new Taxe();
router.post('/taxe', (req,res)=> {
    if(req && req.body){
        taxe.addTaxe({...req.body,taxe:calculeTax( req.body)});
        res.send({ taxe : totalTaxe, time :  req.requestTime})
    }
}).get('/taxe/:id',(req,res)=> {
    if(req.params.id){
        res.send(taxe.getTaxe(req.params.id)) 
    }else{
        res.status(404).send('id is required')

    }
});

router.get('/todo/:id',async (req,res)=> {
    console.log('id',req.params.id)
    const result = await  getTodoById(req.params.id)
    res.send(result)
})

module.exports = router;


