import express from 'express'
import path from "path"
import cors from 'cors'
import morgan from 'morgan'
import info from "../../package.json"
import clientes from '../routes/clientes'
import proveedores from '../routes/proveedores'
import productos from '../routes/productos'
import usuarios from '../routes/usuarios'
import ventas from '../routes/ventas'
import system from '../routes/sistema'
const app = express()
import history from 'connect-history-api-fallback'
app.use(cors())
app.use(morgan("dev"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
import {buscar} from './config.roles'
app.use(history())
app.use(express.static(path.join(__dirname, "../public")));

buscar()
//app.get('/',(req, res) =>{
  //  console.log('jola')
    //res.json(info);
//})

app.use('/api/clientes', clientes)
app.use('/api/proveedores', proveedores)
app.use('/api/productos', productos)
app.use('/api/usuarios', usuarios)
app.use('/api/ventas', ventas)
app.use('/api/system',system)
app.set('port',process.env.PORT || 3000)
app.use(function(req, res, next) {
    res.redirect('/')
})
export default app