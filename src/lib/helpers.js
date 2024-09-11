import bcrypt from 'bcrypt'
import { format } from 'timeago.js'
const helpers = {}

helpers.encriptarContraseña = async(contraseña) => {
    const saltRound = 10
    try {
        const hash = await bcrypt.hash(contraseña, saltRound)
    }catch(e) {
        console.log('Error al hashear la contraseña:', e)
    }
}

helpers.machContraseña = async(contraseña, contraseñaHash) =>{

    try {

        return await bcrypt.compare(password, savedPassword)

    }catch(e) {
        console.log('Error', e)
        
    }
}
helpers.timeago = (timestamp) => {
    
    return format(timestamp);
}


module.exports = helpers