import express from 'express'
import indexRoutes from './routes/index.routes.js'
import authentication from './routes/authentication.routes.js'
import path from 'path'
import { fileURLToPath } from 'url';

// Crear __dirname manualmente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//inicializacion de express
const app = express()
// decimos que plantilla vamos a usar

app.set('views', './src/views')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false})) /*para aceptar los datos que 
envio desde el formulario */


// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));
//para soportar datos formato json
app.use(express.json())
app.use(indexRoutes)
app.use(authentication)


app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint no encontrado'
    })
})





export default app;