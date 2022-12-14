import express from 'express'
import path from "path"
import cors from 'cors'
import morgan from 'morgan'
import info from "../../package.json"
import categorias from "../routes/categorias"
import clientes from '../routes/clientes'
import ubicaciones from '../routes/ubicaciones'
import productos from '../routes/productos'
import usuarios from '../routes/usuarios'
import ventas from '../routes/ventas'
import system from '../routes/sistema'
const app = express()
import cloudy from "cloudinary"
cloudy.config(
  {
    cloud_name: process.env.cloudName,
    api_key:process.env.apiKey,
    api_secret:process.env.apiSecret
  }
)

app.use(cors())
app.use(morgan("dev"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
import {buscar} from './config.roles'
import{createubicaciones} from "./config.ubicaciones"

app.use(express.static(path.join(__dirname, "../public")));
createubicaciones()
buscar()

import fu from "express-fileupload"
app.use(fu() )
app.use('/api/categorias', categorias)
app.use('/api/clientes', clientes)
app.use('/api/ubicaciones', ubicaciones)
app.use('/api/productos', productos)
app.use('/api/usuarios', usuarios)
app.use('/api/ventas', ventas)
app.use('/api/system',system)
app.set('port',process.env.PORT || 3000)
app.use(function(req, res, next) {
    res.status(404)
})
export default app