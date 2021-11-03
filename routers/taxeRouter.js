const express = require('express');
const Taxe = require('../taxe/taxe');
var router = express.Router();
var taxe = new Taxe();
router.post('/taxe', (req,res)=> {
    var totalTaxe = 0;
    if(req && req.body){
        
        if(req.body.situation === '1'){
            totalTaxe = req.body.salaire * 12 ;
        }else if(req.body.situation === '2'){
            totalTaxe = req.body.salaire * 12 / (2*(req.body.nbenfant*0.5)) ;

        }
        taxe.addTaxe({...req.body,taxe:totalTaxe});
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