import { Schema, model } from "mongoose"

const producto = new Schema({
    codigo: { type: String, required: true },
    categoria: { type: Schema.Types.ObjectId, ref: "categorias" },
    precio:{type: Number, required: false},
    status: { type: Boolean, default: true },
    descripcion: { type: String, required: true },
    img: { type: String },
    img_id: {type: String},
    alerta: { type: String, required: false },


}, {
    versionKey: false, timestamps: true
});
export default model('productos', producto)