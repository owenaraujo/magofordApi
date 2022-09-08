import clientes from "../models/clientes";
export async function save(req, res) {
  try {
    const datos = req.body;
    const cliente = await clientes.find({ dni: datos.dni });
    if (cliente.length != 0)return res.json({ value: "usuario ya registrado", status: null });
    await new clientes(datos).save();
    res.json({ value: " cliente registrado con exito", status: true });
  } catch (e) {
    res.json({ value: "todo ha salido exitosamente mal", status: false });
  }
}
export async function editar(req, res) {
try {
  const { id } = req.params;
  const datos = req.body;
await clientes.findByIdAndUpdate(id , datos)
res.json({value: 'cliente editado con exito', status: true})
} catch (error) {
res.json({value: 'todo ha salido exitosamente mal', status:false})
  
}
}
export async function desactivar(req, res) {
  try {
    const { id } = req.params;
  const status = { status: false };
  await clientes.findByIdAndUpdate(id , status)
  res.json({value: "cliente desactivado con exito", status: true})
  } catch (error) {
    res.json({value:"todo ha salido satisfactoriamente mal", status: false
  })
  }
}
export async function activar(req, res) {
  try {
    const { id } = req.params;
  const status = { status: true };
  await clientes.findByIdAndUpdate(id , status)
  res.json({value: "cliente activado con exito", status: true})
  } catch (error) {
    res.json({value:"todo ha salido satisfactoriamente mal", status: false
  })
  }
}

export async function buscarId(req, res) {
  const { id } = req.params;
  console.log(id);
}
export async function buscar(req, res) {
 try {
   const data = await clientes.find().populate('user_id')
   res.json(data)
 } catch (error) {
   res.json({value: 'todo ha salido satisfacctoriamente mal'})
 }
}
