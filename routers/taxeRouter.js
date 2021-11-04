const express = require('express');
const Taxe = require('../Module/taxe');
const calculeTax = require('../utils/utils');
var router = express.Router();
var taxe = new Taxe();
router.post('/taxe', (req,res)=> {
    if(req && req.body){
        
       
        taxe.addTaxe({...req.body,taxe:calculeTax( req.body)});
        res.send({ taxe : totalTaxe, time :  req.requestTime})
    }
}).get('/:id',(req,res)=> {
    if(req.params.id){
        res.send(taxe.getTaxe(req.params.id)) 
    }else{
        res.status(404).send('id is required')

    }
})
module.exports = router;


