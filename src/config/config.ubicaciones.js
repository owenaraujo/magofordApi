

import tiendas from '../models/tiendas';
export async function createubicaciones() {
    try {
        const data = await tiendas.find()
    if(data.length <= 0) create()
    else{ console.log('ubicaciones ya creadas')}
    } catch (error) {
        console.log(error);
        console.log('hubo un error en la busqueda de ubicaciones');
    }
}
async function create() {
  try {
    const valencia ={
        nombre: 'valencia',
    
    }
    const barquisimeto ={
        nombre: 'barquisimeto',
    
    }
    const vigia ={
        nombre: 'el vigia',
    
    }
    await new ubicaciones(valencia,barquisimeto, vigia).save()
  } catch (error) {
      console.log('hubo un error en la creacion de ubicaciones');
  }
}