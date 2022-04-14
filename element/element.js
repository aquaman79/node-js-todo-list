const bdd = require("../bdd")
//creer un element 
const  Element ={ 
    CreateElement :async (elementdata)=>
    {
    const element = await bdd.create(elementdata)
    console.log(element)
    },
//afficher les elements 
 getElement : async ()=>
{
    const element = await bdd.find({})
    console.log(element)
    } 
}
module.exports= Element