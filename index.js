
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
    res.send( req.body)
})
app.listen(port,()=>{
    console.log('Express runing ');
})


