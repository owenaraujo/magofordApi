import { Schema, model } from "mongoose"

const producto = new Schema({
   // nombre:{type: String,  required: true},
   // marca:{type: String,  required: true},
   // modelo:{type: String,  required: true},
    codigo:{type: String,  required: true},
    status: {type: Boolean, default: true},
    descripcion:{type: String,  required: true},
    cantidad:{type: Number,  required: true},
    ubicacion:{type: String,  required: false},
    //iva:{type: Number,  required: false},
    img:{type:String},
    alerta:{type: String,  required: false},
   // precio:{type: Number , required: true},
   // proveedor_id:{type: Schema.Types.ObjectId, ref: 'proveedores'},
   // nombre:{type: String , required: true},

},{
    versionKey : false, timestamps: true
});
export default model('productos', producto)