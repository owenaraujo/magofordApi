import {Router} from 'express'
import{save,  getLimit, agregarAbonos, getAbonos, editar, cancelar, pagar} from "../controller/ventas"
const route = Router()
route.get('/default',(req,res)=>{
    res.json('default')
})
route.post('/cancelar/',cancelar)
route.post('/factura/pagar/:id',pagar)
route.get('/abonos/:id',getAbonos)
route.post('/abonos/:id',agregarAbonos)
route.get('/:limit/:page/:inicio/:final', getLimit)


route.post('/',save)
route.post('/edit',editar)



export default route