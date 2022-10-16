import {Router} from 'express'
import categorias from "../models/categorias"
import productos from "../models/productos"
const router = Router()
router.post('/',async (req,res)=>{
try {
    const data = req.body
    await new categorias(data).save()
    res.json("ok")
} catch (error) {
    console.log(error);
}
})
router.post('/:id',async (req,res)=>{
try {
    const {id}= req.params
    
    const data = req.body
   await categorias.findByIdAndUpdate(id, data)
    res.json("ok")
} catch (error) {
    console.log(error);
}
})
router.get('/limit/:cantidad', async (req, res)=>{
  
    try {
        const cantidad = parseInt(req.params.cantidad)
        let data =await  categorias.find().limit(cantidad)
        
        await Promise.all(
            data.map(async function (e){
                let cantidad = await productos.countDocuments({categoria:e._id})
                let cantidad2 = Math.ceil(cantidad / 5) * 5;
                e.cantidad= cantidad2
            })
        )
        
    res.json(data) 
    } catch (error) {
        
        res.json(error)
    }
})
router.get('/', async (req, res)=>{
   
    try {
        let data =await  categorias.find()
        
        await Promise.all(
            data.map(async function (e){
                let cantidad = await productos.countDocuments({categoria:e._id})
                
                e.cantidad= cantidad
            })
        )
        
    res.json(data) 
    } catch (error) {
        res.json(error)
    }
})
router.delete('/', async (req, res)=>{
   
    try {
        const data =await  categorias.findByIdAndUpdate({status:false})
    res.json(data) 
    } catch (error) {
        res.json(error)
    }
})

export default router