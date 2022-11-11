import {Schema, model} from "mongoose"
import ventas from "./ventas"

const abono = new Schema({
    id_venta: {type:Schema.Types.ObjectId, ref: "ventas"},
    cantidad:{type: Number}
},
{timestamps: true, versionKey: false})
export default model ("abonos", abono)