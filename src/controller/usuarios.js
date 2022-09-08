import usuarios from "../models/usuarios";
import roles from '../models/roles'
import { createToken } from "../midleware/token";
export async function login(req, res) {
  try {
    const { username, password } = req.body;
    const data = await usuarios.findOne({ username: username }).populate('rol');
    
    if (!data) {
      res.json({ value: "usuario no encontrado", status: null });
    } else {
    
      if(data.status === false) return res.json({value:"usuario desactivado", status: false})

      let token = false;
      (await usuarios.compare(password, data.password))
        ? (token = await createToken (data._id))
        : (token = false);
      token
        ? res.json({ value: token, status: true , usuario:data._id})
        : res.json({ value: "contrase;a incorrecta", status: false });
    }
      } catch (e) {
    res.json({value: 'todo ha salido satisfactoriamente mal', status: false})
  }
}

export async function save(req, res) {
  try {
    const datos = req.body;
    const data = await usuarios.findOne({username: datos.username });
    if (!data) {
      datos.password = await usuarios.encrypPassword(datos.password)
      await new usuarios(datos).save();
      res.json({value: "usuario guardado con exito", status: true});
    } else {
      res.json({value: "usuario ya registrado", status: null});
      
    }
  } catch (e) {
    res.json({value: "todo ha salido satistactoriamente mal ", status: false});

  }
}
export async function editar(req, res) {
  try {
    const datos = req.body;
    
    const {id} = req.params
    const data = await usuarios.findOne({username: datos.username });
    if(!data){
      datos.password = await usuarios.encrypPassword(datos.password)

      await usuarios.findByIdAndUpdate(id, datos)
      res.json({value: "usuario editado con exito", status: true});
      return
    }
    if (data._id == id) {
      datos.password = await usuarios.encrypPassword(datos.password)

      await usuarios.findByIdAndUpdate(id, datos)
      res.json({value: "usuario editado con exito", status: true});
    } if(data._id != id) {
      res.json({value: "usuario ya registrado", status: null});
      
    }
  } catch (e) {
    res.json({value: "todo ha salido satistactoriamente mal ", status: false});

  }
}

export async function activar(req, res) 
{
  const { id } = req.params;
  const status = { status: true };
await usuarios.findByIdAndUpdate(id, status)
res.json({value : " usuario activado con exito" , status : true})
}
export function filtroFecha(req, res) {
  const { inicio, fin } = req.params;
}
export function limit(req, res) {
  const { count } = req.params;
}
export async function desactivar(req, res) {
  const { id } = req.params;
  let data = await usuarios.findById(id).populate("rol")
  if(data.rol.grado === 1) return res.json({value:"usuario administrador no puede ser desactivado", status: false})

  const status = { status: false };
  
await usuarios.findByIdAndUpdate(id, status)
res.json({value : " usuario desactivado con exito" , status : true})
}
export async function buscar(req, res) {
  const usuario = await usuarios.find();
  res.json(usuario);
}
export async function buscarRoles(req, res) {
  const rol = await roles.find();
  res.json(rol);
}
export async function buscarId(req, res) {
 try {
  const {id}= req.params
  const usuario = await usuarios.findById(id,{password:0}).populate('rol');
   
   if(!usuario) return res.json({value: 'usuario no encontrado', status:null})
  res.json(usuario);
 } catch (error) {
   res.json({value: 'todo ha salido satisfactoriamente mal', status:false})
 }
}
