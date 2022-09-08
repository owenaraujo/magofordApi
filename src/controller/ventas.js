import ventas from "../models/ventas";
import productos from "../models/productos";

export async function save(req, res) {
  try {
    const datos = req.body;
    let status = await Promise.all(
      datos.productos.map(async function (item) {
        let producto = await productos.findById(item.producto_id);
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
        let producto = await productos.findById(item.producto_id);
        let cantidad = producto.cantidad - item.cantidad;
        await productos.findByIdAndUpdate(item.producto_id, {
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
      .populate("cliente_id")
      .populate("user_id");
    res.json({ value: "venta hecha con exito", status: true, data });
  } catch (error) {
    res.json({ value: "todo ha salido satisfactoriamente mal", status: false });
  }
}
export function editar(req, res) {
  const { id } = req.params;
  const datos = req.body;
  console.log(datos, id);
}

export function activar(req, res) {
  const { id } = req.params;
  const status = { status: true };
  console.log(status, id);
}
export function filtroFecha(req, res) {
  const { inicio, fin } = req.params;
  console.log(inicio, fin);
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
    .populate("cliente_id")
    .populate({ path: "productos.producto_id" });
  res.json(data);
}
export async function getLimit(req, res) {
  let { limit, page } = req.params;
  limit = parseInt(limit);
  page = parseInt(page);
  const count = await ventas.countDocuments()
  let pagination = { start: (page - 1) * limit, count: limit };
  const data = await ventas
    .find()
    .skip(pagination.start)
    .limit(pagination.count)
    .populate("user_id")
    .populate("cliente_id")
    .populate({ path: "productos.producto_id" });
  res.json({ventas : data , count : count});

}
