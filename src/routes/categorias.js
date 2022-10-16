import {Router} from 'express'
import categorias from "../models/categorias"
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
router.get('/', async (req, res)=>{
   
    try {
        const data =await  categorias.find()
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