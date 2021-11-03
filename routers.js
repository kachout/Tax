const express = require('express')
var router = express.Router();
router.post('/taxe', (req,res)=> {
   
    if(req && req.body){
        let salaire = req.body.salaire;
        let situation = req.body.situation;
        let nbEnfant = req.body.nbenfant;
        
        res.send({result : (req.body.salaire *  req.body.nbenfant )/ 100, time :  req.requestTime})
    }
}).get('/taxe',(req,res)=> {
    res.send('hy')
})
module.exports = router;