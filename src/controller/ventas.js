import ventas from "../models/ventas";
import stock from "../models/stock"
import productos from "../models/productos";
let falla = { value: "no hay respuesta del servdor", status: false }
export async function save(req, res) {
  try {
    const datos = req.body;
  
    let status = await Promise.all(
      datos.productos.map(async function (item) {
        let producto = await stock.find({id_product: item.producto_id, id_tienda: item.ubicacion_id});
        let cantidad = producto.cantidad - item.cantidad;
        if (cantidad < 0) return false;
        else {
          return true;
        }
      })
    );
    if (status.indexOf(false) != -1) {
      return res.json({
        value: "cantidad de producto no disponible",
        status: false,
      });
    }

    await Promise.all(
      datos.productos.map(async function (item) {
        let producto = await stock.findOne({id_product: item.producto_id, id_tienda: item.ubicacion_id});
        let cantidad = producto.cantidad - item.cantidad;
        
        await stock.findByIdAndUpdate(producto._id, {
          cantidad: cantidad,
        });
      })
    );
    const factura = await ventas.countDocuments();
    datos.factura = factura + 1;
    const id = await new ventas(datos).save();
    const data = await ventas
      .findById(id._id)
      .populate({ path: "productos.producto_id" })
      .populate("user_id");
    res.json({ value: "venta hecha con exito", status: true, data });
  } catch (error) {
    console.log(error);
    res.json(falla);
  }
}
export function editar(req, res) {
 try {
  const { id } = req.params;
  const datos = req.body;
  console.log(datos, id);
 } catch (error) {
  res.json(falla)
 }
}

export function activar(req, res) {
 try {
  const { id } = req.params;
 
  const status = { status: true };
  console.log(status, id);
 } catch (error) {
  res.json(falla)
 }
}
export async function filtroFecha(req, res) {
  const {inicio, final}= req.params
   
    var fecha = 'T23:59:00.000Z'
    var fechaInicio = new Date(inicio);
    var fechaFinal = new Date(final+fecha);
    const ventas = await ventas.find(
     { createdAt:{
        $gte: fechaInicio,
        $lt: fechaFinal
    }}
    ) .find()
    .populate("user_id")
    .populate({ path: "productos.producto_id" })
    res.json(ventas)
}
export function limit(req, res) {
  const { count } = req.params;
  console.log(count);
}
export function borrar(req, res) {
  const { id } = req.params;
  const status = { status: true };
  console.log(status, id);
}
export async function get(req, res) {
  const data = await ventas
    .find()
    .populate("user_id")
    .populate({ path: "productos.producto_id" });
  res.json(data);
}
export async function getLimit(req, res) {
 try {
  let { limit, page, inicio, final } = req.params;
  let complementoFecha = 'T23:59:00.000Z'
    let fechaInicio = new Date(inicio);
    let fechaFinal = new Date(final+complementoFecha);
  limit = parseInt(limit);
  page = parseInt(page);
  let fecha=
  { createdAt:{
    $gte: fechaInicio,
    $lt: fechaFinal
}}
if(!inicio) fecha= null
  const count = await ventas.countDocuments()
  let pagination = { start: (page - 1) * limit, count: limit };
  const data = await ventas
    .find(fecha)
    .skip(pagination.start)
    .limit(pagination.count)
    .populate("user_id")
    .populate({ path: "productos.producto_id" });
  res.json({ventas : data , count : count});

 } catch (error) {
  res.json(falla)
 }
}
