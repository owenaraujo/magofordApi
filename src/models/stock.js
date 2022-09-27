import { model, Schema } from "mongoose";

const stock = new Schema({
  id_product:{type: Schema.Types.ObjectId, ref :"productos", required: true},
  cantidad: {type: Number, required: false},
  id_tienda:{type: Schema.Types.ObjectId, ref :"tiendas", required: true},

}
,{
  versionKey : false, timestamps: true
});
export default model('stock', stock)