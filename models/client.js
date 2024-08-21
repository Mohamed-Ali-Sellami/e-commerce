const mongoose=require('mongoose')
const schema=mongoose.Schema
const clientschema=new schema( {

name:{
    type:String,
    // required:true
},

lastname: {
type:String,
// required:true 

},
Address:{
    type:String,
// required:true
},

Number:{
    type:Number,
// required:true
},
mail:{
    type:String,
// required:true
},
isAdmin: {
    type: Boolean,
    default: false,
},

})

const client=mongoose.model('collection_client',clientschema)
module.exports=client
