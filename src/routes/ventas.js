import {Router} from 'express'
import{save,  getLimit, agregarAbonos, getAbonos, editar, cancelar} from "../controller/ventas"
const route = Router()
route.get('/default',(req,res)=>{
    res.json('default')
})
route.post('/cancelar/',cancelar)
route.get('/abonos/:id',getAbonos)
route.get('/:limit/:page', getLimit)


route.post('/abonos/limit/:id',agregarAbonos)
route.post('/',save)
route.post('/edit',editar)



export default route