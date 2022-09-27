import {Router} from 'express'
import { verifyToken } from '../midleware/token'
import {activar,desactivar,buscar,agregar,save,buscarId,editar, buscarStock, buscarAllStock} from '../controller/productos'
const route = Router()
route.get('/default',(req,res)=>{
    res.json('default')
})
route.get('/stock/:param', buscarAllStock)
route.get('/', buscar)
route.get('/:id', buscarId)
route.get('/:idTienda/:idProducto', buscarStock)
route.post('/', save)
route.post('/:id', editar)
route.put('/cantidad/add', agregar)
route.delete('/activar/:id', activar)
route.delete('/:id', desactivar)
export default route