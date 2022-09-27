import { model, Schema } from "mongoose";
const tienda = new Schema({
    nombre:{type: String, required: false}
},{
    versionKey: false, timestamps: true
})

export default model("tiendas", tienda)