

import usuarios from '../models/usuarios'
import roles from '../models/roles'
export async function createUSer() {
    try {
        const data = await usuarios.find()
    if(data.length <= 0) create()
    else{ console.log('usuario ya creado')}
    } catch (error) {
        console.log('hubo un error en la busqueda de usuarios');
    }
}
async function create() {
  try {
    const {_id} = await roles.findOne({grado:1})
    const newUser ={
        username: 'admin',
        email: 'default@gmail.com',
        password : await usuarios.encrypPassword('holamundo'),
        rol: _id
    
    }
    await new usuarios(newUser).save()
  } catch (error) {
      console.log('hubo un error en la creacion de usuarios');
  }
}