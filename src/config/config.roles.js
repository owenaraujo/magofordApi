import roles from "../models/roles";
import {createUSer} from './config.user'

export async function buscar(){
  try {
    const rol = await roles.find();

  if (rol.length <= 0) crearRoles()
  else{ console.log('roles ya creados exitosamente')}
  } catch (error) {
    console.log(error)
    console.log('hubo un error en la busqueda de roles')
  }
};
async function crearRoles() {
 try {
  const admin = {
    nombre: "administrador",
    grado: 1,
  }
  const vendedor = {
    nombre: "vendedor",
    grado: 2,
  }
  const usuario = {
    nombre: "usuario",
    grado: 3,
  }
  await  new roles(admin).save()
  await  new roles(vendedor).save()
  await  new roles(usuario).save()
createUSer()
 } catch (error) {
   console.log('hubo un errror en la creacion de roles')
 }
}

