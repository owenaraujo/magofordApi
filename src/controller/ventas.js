import ventas from "../models/ventas";
import stock from "../models/stock"
import productos from "../models/productos";
import abonos from "../models/abonos"



let falla = { value: "no hay respuesta del servdor", status: false }
export async function save(req, res) {
  try {
    const datos = req.body;

    let status = await Promise.all(
      datos.productos.map(async function (item) {
        let producto = await stock.find({ id_product: item.producto_id, id_tienda: item.ubicacion_id });
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
        let producto = await stock.findOne({ id_product: item.producto_id, id_tienda: item.ubicacion_id });
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
export async function editar(req, res) {
  try {

    const datos = req.body;
    let venta = await ventas.findById(datos.id_venta)

    const result = await Promise.all(
      venta.productos.map(async function (e) {
        if (e.producto_id == datos.producto_id) {

          let result = await stock.findOne({ id_product: datos.producto_id, id_tienda: datos.id_tienda })
          let newCantidad = result.cantidad + 1
          e.cantidad = e.cantidad -1
          if(e.cantidad < 0)return 0

          await stock.findByIdAndUpdate(result._id, {cantidad : newCantidad})

        }
      })
      )
     if(result.indexOf(0) != -1) return res.json({status:false})

      await ventas.findByIdAndUpdate(datos.id_venta, venta)
      let venta2 = await ventas.findById(datos.id_venta).populate({ path: "productos.producto_id" });
    res.json({status:true, result: venta2})

  } catch (error) {
    console.log(error);
    res.json(error)
  }
}

export async function pagar(req, res) {
  try {
    const { id } = req.params;

    const status = { pagado: true };
    await ventas.findByIdAndUpdate(id, status)
    res.json({status: true,  value:"factura pagada con exito"})

  } catch (error) {
    res.json(falla)
  }
}
export function activar(req, res) {
  try {
    const { id } = req.params;

    const status = { status: true };

  } catch (error) {
    res.json(falla)
  }
}
export async function filtroFecha(req, res) {
  const { inicio, final } = req.params

  var fecha = 'T23:59:00.000Z'
  var fechaInicio = new Date(inicio);
  var fechaFinal = new Date(final + fecha);
  const ventas = await ventas.find(
    {
      createdAt: {
        $gte: fechaInicio,
        $lt: fechaFinal
      }
    }
  ).find()
    .populate("user_id")
    .populate({ path: "productos.producto_id" })
  res.json(ventas)
}
export function limit(req, res) {
  const { count } = req.params;

}
export function borrar(req, res) {
  const { id } = req.params;
  const status = { status: true };

}

export async function getLimit(req, res) {


  try {
   
    let { limit, page, inicio, final } = req.params;
    let complementoFecha = 'T23:59:00.000Z'
    "2022-11-02T18:50:02.320+00:00"
    
    let fechaInicio = new Date(inicio).toISOString();
    let fechaFinal = new Date(final + complementoFecha);
    limit = parseInt(limit);
    page = parseInt(page);
    
    let fecha =
    {
      createdAt: {
        $gte: fechaInicio,
        $lt: fechaFinal
      }
    }
    console.log(fecha);
    if (!inicio) fecha = null
    const count = await ventas.countDocuments()
    let pagination = { start: (page - 1) * limit, count: limit };
   
   
    
    const data = await ventas
      .find({
         pagado: req.query.pago,
        createdAt: {
          $gte: fechaInicio,
          $lt: fechaFinal
        }    

       
      })
      .skip(pagination.start)
      .limit(pagination.count)
      .populate("user_id")
      .populate({ path: "productos.producto_id" });
    res.json({ ventas: data, count: count });

  } catch (error) {
    res.json(error)
    // res.json(falla)
  }
}

export async function agregarAbonos(req, res) {

  try {

    const { cantidad } = req.body
    if (cantidad <= 0) {
      return res.json({status: false , value: "no se puede realizar un abono en valor negativo o en cero"})
    }
    let totalVenta = 0
    let totalAbonos = 0
    const { id } = req.params
    const venta = await ventas.findById(id)

    // suma de el total de los productos
    await Promise.all(
      venta.productos.map(async function (item) {

        if (item.cantidad > 0) {
          let num = item.cantidad * item.precio
          totalVenta += parseFloat(num)

          return item.cantidad * item.precio

        }
      })
    )



    const ListaAbonos = await abonos.find({ id_venta: id })
    // suma de los abonos
    await Promise.all(
      ListaAbonos.map(async function (item) {
        totalAbonos += item.cantidad

      })
    )
    const sumaAbonos = parseFloat(cantidad) + totalAbonos
    const abonosTotal = totalVenta - sumaAbonos
    const restante = totalVenta - totalAbonos
    if (abonosTotal < 0) {


      return res.json({status:false, value :"la cantidad de abonos supera el valor total de la factura" })
    }


    const abono = { id_venta: id, cantidad: cantidad }
    const result = await new abonos(abono)
    await result.save()
    res.json({status: true, value : `abono por ${cantidad} registrado con exito`});
  } catch (error) {
    res.json(falla)
  }





}

export async function getAbonos(req, res) {

 try {
  const {id} = req.params

  const data = await abonos.find({id_venta: id})
  res.json(data)

 } catch (error) {
  console.log(error);
 }
}
export async function cancelar(req, res) {

 try {
  const {id} = req.query
  console.log(req.query);
  const data = await ventas.findByIdAndUpdate(id,{status:false})
  res.json(data)

 } catch (error) {
  res.json(error);
  console.log(error);
 }
}