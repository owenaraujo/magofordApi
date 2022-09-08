import {model, Schema} from "mongoose"
const system = new Schema({
    dolar : {type: Number, required: false}
},
{
    versionKey : false, timestamps: true
  })
export default model("system", system)