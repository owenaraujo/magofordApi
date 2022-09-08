import proveedores from "../models/proveedores";
export async function actualizar(req, res) {
  try {
    const { id } = req.params;
    const datos = req.body;
    const resultado = await proveedores.findOne({ rif: datos.rif }, {limit: 1});
if(resultado){
    if (resultado._id.toString() === id) {
      await proveedores.findByIdAndUpdate(id, datos);
      res.json({ data: "proveedor actualizado con exito", status: true });
    } else {
      res.json({ data: "proveedor ya regitrado", status: null });
    }
  }
  if(!resultado){
    await proveedores.findByIdAndUpdate(id, datos);
      res.json({ data: "proveedor actualizado con exito", status: true });
  }
  } catch (error) {
    console.log(error);
    res.json({ data: "todo ha salido satisfactoriamente mal", status: false });
  }
}
export async function save(req, res) {
  try {
    const datos = req.body;
    const resultado = await proveedores.findOne({ rif: datos.rif });
    if (!resultado) {
      await new proveedores(datos).save();
      res.json({ data: "proveedor regitrado con exito", status: true });
    } else {
      res.json({ data: "proveedor ya regitrado", status: null });
    }
  } catch (error) {
    console.log(error);
    res.json({ data: "todo ha salido satisfactoriamente mal", status: false });
  }
}

export async function buscarActivos(req, res) {
  try {
    const proveedor = await proveedores.find({status: true});
    res.json(proveedor);
  } catch (error) {}
}

export async function buscar(req, res) {
  try {
    const proveedor = await proveedores.find();
    res.json(proveedor);
  } catch (error) {}
}
export async function buscarId(req, res) {
  try {
    const { id } = req.params;
    const proveedor = await proveedores.findById(id);
    res.json(proveedor);
  } catch (error) {}
}

export async function desactivar(req, res) {
  try {
    const { id } = req.params;
    const status = { status: false };
    await proveedores.findByIdAndUpdate(id, status);
    res.json({ data: "proveedor desactivado", status: true });
  } catch (error) {
    res.json({ data: "todo ha salido satisfactoriamente mal", status: false });
  }
}
export async function activar(req, res) {
  try {
    const { id } = req.params;
    const status = { status: true };
    await proveedores.findByIdAndUpdate(id, status);
    res.json({ data: "proveedor activado", status: true });
  } catch (error) {
    res.json({ data: "todo ha salido satisfactoriamente mal", status: false });
  }
}
