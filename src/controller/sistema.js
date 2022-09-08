import system from "../models/system"




export async function crear(req, res) {
    try { 
        const datos = req.body
        const val=  new system(datos)
        console.log(val)
await val.save()
        res.json({value: "guardado con exito", status: true})
        
    } catch (error) {
        console.log(error)
        res.json({value:"todo ha salido satisfactoriamete mal", status: false})
    }
}
export async function editar(req, res) {
    try {
        const {id}= req.params
        const datos = req.body
    await system.findByIdAndUpdate(id,datos)
    res.json({value: "editado con exito", status: true})
    } catch (error) {
        console.log(error)
        res.json({value:"todo ha salido satisfactoriamete mal", status: false})
        
    }
}

export async function buscar(req, res) {
    try {
        const data = await system.findOne()
        res.json(data)
    } catch (error) {
        res.json({value:"todo ha salido satisfactoriamete mal", status: false})
    }
}