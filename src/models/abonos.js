import {Schema, model} from "mongoose"
import ventas from "./ventas"

const abono = new Schema({
    id_venta: {type:String},
    cantidad:{type: Number}
},
{timestamps: true, versionKey: false})
export default ("abonos", abono)