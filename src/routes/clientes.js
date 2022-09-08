import {Router} from 'express'
import {save, editar, buscar, buscarId, activar, desactivar} from '../controller/clientes'
const route = Router()
route.get('/default',(req,res)=>{
    res.json('default')
})
route.get('/', buscar)
route.post('/', save)
route.post('/:id',editar)

route.delete('/:id', desactivar)
route.delete('/activar/:id', activar)
route.get('/:id',buscarId)
export default route