import {Schema, model} from "mongoose"
const categoria = new Schema({
    nombre: {type:String},
    cantidad: {type:String}
},{
    versionKey: false,
    timestamps: true
})
export default model( "categorias", categoria)