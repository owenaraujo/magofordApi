import productos from "../models/productos";
import stock from "../models/stock"
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
    let datos = req.body;
    if (req.files) {
          
  let EDFile = req.files.img
  let ruta = path.join(__dirname,`../public/files/ ${EDFile.name}` )
   await EDFile.mv(ruta)
   cloudinary.config({ 
    cloud_name: 'dn9dlda5v', 
    api_key: '215426649821956', 
    api_secret: 'de2gegNQzeoGxA2nBjm5TOai1Mo' 
  });
const img = await cloudinary.v2.uploader
 .upload(ruta)
datos.img= img.url
    }
  
  
    const { id } = req.params;
   
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
    console.log(error);
    res.json({ value: "no hay respuesta del servdor", status: false });
  }
}
export async function agregar(req, res){
  try {
  let newData = req.body
  const result = await stock.countDocuments({id_product: newData.id_product, id_tienda: newData.id_tienda})

  if(result > 0){    
    await stock.findOneAndUpdate({id_product: newData.id_product, id_tienda: newData.id_tienda},{cantidad:newData.cantidad})

    res.json({value: "nuevo stock agregado con exito", status: true });
  return}

  
  await new stock(newData).save()
  res.json({ value: "stock agregado con exito", status: true });
  
  } catch (e) {
    console.log(e)
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
// hay que agregar esta funcion al path
export async function buscarActivos(req, res) {
  try {
    const producto = await productos.find({status: true})
    res.json(producto)
  } catch (error) {
    res.json({ value: "no hay respuesta del servdor", status: false });
    
  }

}
export async function buscarInactivos(req, res) {
  try {
    const producto = await productos.find({status: false})
    res.json(producto)
  } catch (error) {
    res.json({ value: "no hay respuesta del servdor", status: false });
    
  }

}
export async function buscarAllStock(req, res) {
  try {
    const producto = await stock.find({id_tienda: req.params.param}).populate("id_product").populate("id_tienda")
    res.json(producto)
  } catch (error) {
    
    res.json({ value: "no hay respuesta del servdor", status: false });
    
  }

}

export async function buscarStock(req, res) {
try {
 
 const result = await stock.findOne({id_product:req.params.idProducto, id_tienda: req.params.idTienda})
 res.json(result)
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
