import { model, Schema } from "mongoose";
const proveedor = new Schema ({
    nombre:{type: String, required: true },
    rif:{type: String, required: true },
    telefono:{type: String, required: true },
    direccion:{type: String, required: true },
    status:{type: Boolean, default: true },
},{
    versionKey : false, timestamps: true
})
export default model('proveedores', proveedor)