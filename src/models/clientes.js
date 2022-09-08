import { Schema, model } from "mongoose";
const cliente = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  dni: { type: String, required: true },
  telefono: { type: Number, required: true },
  direccion: { type: String, required: true },
 
  user_id: { type: Schema.Types.ObjectId, ref: "usuarios" },
status:{type: Boolean, default: true}
},{
  versionKey : false, timestamps: true
});
export default model("clientes", cliente);
