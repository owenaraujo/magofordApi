import { model, Schema } from "mongoose";

const venta = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "usuarios" },

  factura: { type: Number, required: true },
  productos: [
    {
      status:{type: Boolean, default: true},
      precio: { type: Number, default: 0 },
      cantidad: { type: Number },
      
      ubicacion_id: { type: Schema.Types.ObjectId, ref: "tiendas" },
      producto_id: { type: Schema.Types.ObjectId, ref: "productos" },
    },
  ],
  nota: { type: String, required: false },
  status: { type: Boolean, default: true },
  
  pagado:{type: Boolean, default: false},
  TipoPago: { type: String, required: false },
  credito: { type: Boolean, default: false },
}
  , {
    versionKey: false, timestamps: true
  });
export default model('ventas', venta)