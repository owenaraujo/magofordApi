import { model, Schema } from "mongoose";

const venta = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "usuarios" },
  cliente_id: { type: Schema.Types.ObjectId, ref: "clientes" },
  factura: {type: Number, required : true},
  productos: [
    {
      precio: { type: Number },
      imei: [{value : {type: Number} }],
      cantidad: { type: Number },
      iva: { type: Number, default: 0 },
      producto_id: { type: Schema.Types.ObjectId, ref: "productos" },
    },
  ],
  nota: {type: String, required: false},
  dolar: {type: Number, required: false},
  abonos: [Number],
  status: {type: Boolean, default: true},
  prestamos: {type: Boolean, default: false},
}
,{
  versionKey : false, timestamps: true
});
export default model('ventas', venta)