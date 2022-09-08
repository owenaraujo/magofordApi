import productos from "../models/productos";

export async function save(req, res) {
  try {
    const datos = req.body;
    const verifyCodigo = await productos.findOne({ codigo: datos.codigo });
    if (!verifyCodigo) {
      await new productos(datos).save();
      res.json({ value: "producto guardado con exito", status: true });
    } else {
      res.json({ value: "codigo de producto ya en uso", status: null });
    }
  } catch (error) {
    res.json({ value: "todo ha salido satisfactoriamente mal", status: false });
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
    res.json({ value: "todo ha salido satisfactoriamente mal", status: false });
  }
}
export async function agregar(req, res){
  try {
    const {id} = req.params
  const newData = req.body
  await productos.findByIdAndUpdate(id, newData)
  res.json({ value: "producto editado con exito", status: true });
  
  } catch (e) {
    res.json({ value: "todo ha salido satisfactoriamente mal", status: false });
    
  }
}
export async function desactivar(req, res) {
  try {
    const { id } = req.params;
    const status = { status: false };
  await productos.findByIdAndUpdate(id, status);
      res.json({ value: "producto desactivado con exito", status: true });
  } catch (error) {
    res.json({ value: "todo ha salido satisfactoriamente mal", status: false });
  }
}
export async function activar(req, res) {
  try {
    const { id } = req.params;
    const status = { status: true };
    await productos.findByIdAndUpdate(id, status)
        res.json({ value: "producto activado con exito", status: true });
} catch (error) {
    res.json({ value: "todo ha salido satisfactoriamente mal", status: false });
      
  }
}
export async function buscar(req, res) {
  try {
    const producto = await productos.find()
    res.json(producto)
  } catch (error) {
    res.json({ value: "todo ha salido satisfactoriamente mal", status: false });
    
  }

}

export async function buscarId(req, res) {
try {
  const { id } = req.params;
  const producto = await productos.findById(id)
  res.json(producto)
} catch (error) {
  res.json({ value: "todo ha salido satisfactoriamente mal", status: false });
  
}
}
