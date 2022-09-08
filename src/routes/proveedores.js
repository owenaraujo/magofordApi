import {Router} from 'express'
const route = Router()
import {save,buscarId,buscarActivos, buscar, desactivar, activar, actualizar} from '../controller/proveedores'
route.get('/default',(req,res)=>{
    res.json('default')
})

route.get('/', buscar)
route.get('/activate', buscarActivos)
route.get('/:id', buscarId)
route.post('/', save)
route.post('/:id', actualizar)
route.delete('/:id',desactivar)
route.delete('/activate/:id', activar)
export default route