const express = require('express')
//creation de router
const router = express.Router()
//body parser est l'intermidiere entre le back end et le front end 
var bodyParser = require('body-parser');

//midelwear qui transforme le data en JSON 
router.use(bodyParser.json())
//recuperer mon element 
const Element = require('./element')

router.post('/',(req,res)=>{
    Element.CreateElement(req.body,function(err,count){
        if(err)
        {
            res.status(400).send("erreur post")
        }else
        {
            res.send(req.body)
        } 
    })
})

router.get('/',(req,res)=>{
    Element.getElement(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.send(rows);
        }
    })
})
module.exports = router