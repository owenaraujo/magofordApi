import ubicaciones from "../models/tiendas";
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
    res.json({ data: "no hay respuesta del servdor", status: false });
  }
}
export async function save(req, res) {
  try {
    const datos = req.body;
    const resultado = await ubicaciones.findOne({ nombre: datos.nombre });
    if (!resultado) {
      await new ubicaciones(datos).save();
      res.json({ data: "ubicacion regitrado con exito", status: true });
    } else {
      res.json({ data: "ubicacion ya regitrado", status: null });
    }
  } catch (error) {
    console.log(error);
    res.json({ data: "no hay respuesta del servdor", status: false });
  }
}

export async function buscarActivos(req, res) {
  try {
    const ubicacion = await ubicaciones.find({status: true});
    res.json(ubicacion);
  } catch (error) {}
}

export async function buscar(req, res) {
  try {
    const ubicacion = await ubicaciones.find();
    res.json(ubicacion);
  } catch (error) {
    res.json("no hay datos")
  }
}
export async function buscarId(req, res) {
  try {
    const { id } = req.params;
    const ubicacion = await ubicaciones.findById(id);
    res.json(ubicacion);
  } catch (error) {}
}

export async function desactivar(req, res) {
  try {
    const { id } = req.params;
    const status = { status: false };
    await ubicaciones.findByIdAndUpdate(id, status);
    res.json({ data: "ubicacion desactivado", status: true });
  } catch (error) {
    res.json({ data: "no hay respuesta del servdor", status: false });
  }
}
export async function activar(req, res) {
  try {
    const { id } = req.params;
    const status = { status: true };
    await ubicaciones.findByIdAndUpdate(id, status);
    res.json({ data: "ubicacion activado", status: true });
  } catch (error) {
    res.json({ data: "no hay respuesta del servdor", status: false });
  }
}
