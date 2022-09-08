import {Router} from 'express'
import { verifyToken } from '../midleware/token'
import {activar,desactivar,buscar,agregar,save,buscarId,editar} from '../controller/productos'
const route = Router()
route.get('/default',(req,res)=>{
    res.json('default')
})
route.get('/', buscar)
route.get('/:id', buscarId)
route.post('/',verifyToken, save)
route.post('/:id', editar)
route.put('/cantidad/:id', agregar)
route.delete('/activar/:id', activar)
route.delete('/:id', desactivar)
export default route