
const express = require('express')

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
var router = express.Router();

const port = 3000

app.get('/test', (req,res)=> {
    res.send('hello')
})
app.post('/calcule', (req,res)=> {
   
    if(req && req.body){
        let salaire = req.body.salaire;
        let situation = req.body.situation;
        let nbEnfant = req.body.nbenfant;
        
        res.send({result : (req.body.salaire *  req.body.nbenfant )/ 100})
    }
   //res.send('no body')
})
app.listen(port,()=>{
    console.log('Express runing ');
})


