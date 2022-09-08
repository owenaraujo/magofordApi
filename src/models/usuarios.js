import { model, Schema } from "mongoose";
import bcryptjs from "bcryptjs";
const usuario = new Schema({
    username: { type: String, required: true},
    password: { type: String, required: true},
    email: { type: String, required: true},
    status:{type: Boolean, default: true},
    rol: { type: Schema.Types.ObjectId, ref: 'roles'},
}
,{
  versionKey : false, timestamps: true
})
usuario.statics.encrypPassword = async (password) => {
    const salt = await bcryptjs.genSalt(10);
    return await bcryptjs.hash(password, salt);
  };
  usuario.statics.compare = async (password, recivePassword) => {
    return await bcryptjs.compare(password, recivePassword);
  };
export default model('usuarios', usuario)