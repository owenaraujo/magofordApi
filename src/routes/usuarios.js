import {Router} from 'express'
import {buscar, save,desactivar, activar, editar, buscarRoles, login, buscarId} from'../controller/usuarios'
const route = Router()

route.post('/', save)
route.post('/login', login)
route.get('/', buscar)
route.get('/roles', buscarRoles)
route.get('/:id', buscarId)
route.get('/limit/:count')
route.post('/:id', editar)
route.delete('/:id', desactivar)
route.delete('/activar/:id', activar)
export default route