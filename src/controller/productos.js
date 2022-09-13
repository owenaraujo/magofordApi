import productos from "../models/productos";
import path from "path"
import cloudinary from "cloudinary"
export async function save(req, res) {
 
  try {
     
  let EDFile = req.files.img
  let ruta = path.join(__dirname,`../public/files/ ${EDFile.name}` )
   await EDFile.mv(ruta)
   cloudinary.config({ 
    cloud_name: 'dn9dlda5v', 
    api_key: '215426649821956', 
    api_secret: 'de2gegNQzeoGxA2nBjm5TOai1Mo' 
  });
 const imagenUrl = await cloudinary.v2.uploader
 .upload(ruta)

   
   
    const datos = req.body;
    const verifyCodigo = await productos.findOne({ codigo: datos.codigo });
    if (!verifyCodigo) {
      datos.img= imagenUrl.url
      await new productos(datos).save();
      res.json({ value: "producto guardado con exito", status: true });
    } else {
      res.json({ value: "codigo de producto ya en uso", status: null });
    }
  } catch (error) {
    res.json({ value: "no hay respuesta del servdor", status: false });
  }
}
export async function editar(req, res) {
  try {
    const { id } = req.params;
    const datos = req.body;
    const verifyCodigo = await productos.findOne({ codigo: datos.codigo }, {limit:1});
    if(verifyCodigo){
    if (verifyCodigo._id.toString() === id) {
      await productos.findByIdAndUpdate(id, datos);      
      res.json({ value: "producto editado con exito", status: true });
    } else {
      res.json({ value: "codigo de producto ya en uso", status: null });
    }
  }
  if(!verifyCodigo){
    await productos.findByIdAndUpdate(id, datos);      
      res.json({ value: "producto editado con exito", status: true });
  }
  } catch (error) {
    res.json({ value: "no hay respuesta del servdor", status: false });
  }
}
export async function agregar(req, res){
  try {
    const {id} = req.params
  const newData = req.body
  await productos.findByIdAndUpdate(id, newData)
  res.json({ value: "producto editado con exito", status: true });
  
  } catch (e) {
    res.json({ value: "no hay respuesta del servdor", status: false });
    
  }
}
export async function desactivar(req, res) {
  try {
    const { id } = req.params;
    const status = { status: false };
  await productos.findByIdAndUpdate(id, status);
      res.json({ value: "producto desactivado con exito", status: true });
  } catch (error) {
    res.json({ value: "no hay respuesta del servdor", status: false });
  }
}
export async function activar(req, res) {
  try {
    const { id } = req.params;
    const status = { status: true };
    await productos.findByIdAndUpdate(id, status)
        res.json({ value: "producto activado con exito", status: true });
} catch (error) {
    res.json({ value: "no hay respuesta del servdor", status: false });
      
  }
}
export async function buscar(req, res) {
  try {
    const producto = await productos.find()
    res.json(producto)
  } catch (error) {
    res.json({ value: "no hay respuesta del servdor", status: false });
    
  }

}

export async function buscarId(req, res) {
try {
  const { id } = req.params;
  const producto = await productos.findById(id)
  res.json(producto)
} catch (error) {
  res.json({ value: "no hay respuesta del servdor", status: false });
  
}
}
