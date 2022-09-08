import { model, Schema } from "mongoose";

const rol = new Schema({
nombre:{type: String},
grado:{type: Number}
},{
    versionKey : false, timestamps: true
  })
export default model('roles', rol)