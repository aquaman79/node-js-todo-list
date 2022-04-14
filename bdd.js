//la creation de ma base de donnee 
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/element-de-liste')
    .then(()=>console.log("connected"))
    .catch(() => console.error("erreur"))
// mongoose.connect("mongoose://localhost/element-de-liste")
// .then(()=>console.log("connected"))
// .catch(()=>console.log("erreur de connexion base de donnee"))
//creation de shema 

const elementList = new mongoose.Schema({
    element:String
})
const Element =    mongoose.model('Elements',elementList);

module.exports= Element
