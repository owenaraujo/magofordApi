import {Schema, model} from "mongoose"
const categoria = new Schema({
    nombre: {type:String},
    cantidad: {type:String},
    status:{type:Boolean, default: true}
},{
    versionKey: false,
    timestamps: true
})
export default model( "categorias", categoria)