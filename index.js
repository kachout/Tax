
const express = require('express')
var taxe = require('./Controller/taxeController')
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
// this is middleware 
var requestTime =  (req, res, next) => {
    req.requestTime = Date.now();
    next();
  };

const port = 3000
//app.use(requestTime);

app.get('/test', (req,res)=> {
    res.send({test: 'ok'})
})
app.use('/calcule',requestTime,taxe)
app.listen(port,()=>{
    console.log('Express runing ');
})


