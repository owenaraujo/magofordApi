import {Router} from 'express' 
import {buscar,crear,editar} from "../controller/sistema"
import { verifyToken } from '../midleware/token'
const route = Router()

route.get('/verifyToken', verifyToken, (req, res)=>{
    res.json({value : "bienvenido de nuevo" , status: true})
})
route.get('/', buscar)
route.post('/', crear)
route.post('/:id', editar)


export default route